<template>
  <div class="border rounded shadow-sm p-2 h-100">
    <div class="row">
      <div class="col-12 col-xl-8 col-xxl-9">
        <div class="h5 text-start">Dispensings by Date</div>
        <div>
          <Bar
            :options="chartOptions"
            :data="chartData"
            style="min-height: 300px"
          />
        </div>
      </div>
      <div class="col-12 col-xl-4 col-xxl-3 d-flex flex-xl-column justify-content-between justify-content-xl-start pt-4">
        <div>
          <div class="text-center h3">{{ currentDispensingsCount }}</div>
          <p>Dispensings were served within the <strong>current</strong> week</p>
        </div>
        <div class="ps-2 pe-xl-0">
          <div class="text-center h3">{{ prevDispensingsCount }}</div>
          <p>Dispensings were served within the <strong>previous</strong> week</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime, Interval } from 'luxon'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'DispensingsByDate',
  components: { Bar },
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      chartOptions: {
        layout: {
          padding: false,
          autoPadding: false
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true
            }
          }
        },
        categoryPercentage: 0.8,
        barPercentage: 1,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              borderColor: 'grey',
              tickColor: 'grey',
              drawTicks: false,
              lineWidth: 2
            },
            border: {
              display: false,
              dash: [2, 6]
            },
            ticks: {
              padding: 10,
              stepSize: 1,
            },
            min: 0,
            max: 110,
            afterBuildTicks: axis => axis.ticks = [0, 50, 100].map(v => ({ value: v }))
          },
          x: {
            grid: {
              display: false
            },
            border: {
              display: false,
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          }
        }
      }
    }
  },
  computed: {
    chartData() {
      const currentDate = DateTime.fromISO('2023-10-08')
      const firstDateCurrentWeek = currentDate.startOf('week')
      const IntervalCurrentWeek = Interval.fromDateTimes(firstDateCurrentWeek, currentDate.plus({ hours: 23, minutes: 59 }))

      const lastDatePrevWeek = firstDateCurrentWeek.minus({ days: 1 })
      const firstDatePrevWeek = lastDatePrevWeek.startOf('week')
      const IntervalPrevWeek = Interval.fromDateTimes(firstDatePrevWeek, lastDatePrevWeek.plus({ hours: 23, minutes: 59 }))

      const currentWeek = this.items.filter(item => {
        return IntervalCurrentWeek.contains(DateTime.fromISO(item.date))
      })
      const prevWeek = this.items.filter(item => {
        // console.log(IntervalPrevWeek, DateTime.fromISO(item.date))
        return IntervalPrevWeek.contains(DateTime.fromISO(item.date))
      })
      const currentWeekData = [0,0,0,0,0,0,0]
      const prevWeekData = [0,0,0,0,0,0,0]

      currentWeek.forEach(item => {
        currentWeekData[DateTime.fromISO(item.date).weekday - 1] += item.summed_dispensings
      })
      prevWeek.forEach(item => {
        prevWeekData[DateTime.fromISO(item.date).weekday - 1] += item.summed_dispensings
      })

      return {
        labels: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        datasets: [
          {
            label: 'current week',
            data: currentWeekData,
            backgroundColor: 'rgba(33, 37, 41, 1)'
          },
          {
            label: 'previous week',
            data: prevWeekData,
            backgroundColor:  'rgba(33, 37, 41, 0.5)',
          }
        ]
      }
    },
    currentDispensingsCount() {
      return this.chartData.datasets[0].data.reduce((partialSum, a) => partialSum + a, 0)
    },
    prevDispensingsCount() {
      return this.chartData.datasets[1].data.reduce((partialSum, a) => partialSum + a, 0)
    }
  }
}
</script>
