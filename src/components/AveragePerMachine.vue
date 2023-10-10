<template>
  <div class="border rounded shadow-sm p-2 h-100">
    <div class="row">
      <div class="col-12 col-xl-8 col-xxl-9">
        <div class="h5 text-start">Dispensings by Hierachy Level (Average Per Machine)</div>
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
          <div class="text-center h3">{{ value }}</div>
          <p>Dispensings were served <strong>in the highest rank</strong></p>
        </div>
        <div class="ps-2 pe-xl-0">
          <div class="text-center h3">TAT</div>
          <p>on average per machine within the last <strong>{{ daysHavePassed }}</strong> days</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AveragePerMachine',
  components: { Bar },
  props: {
    value: {
      type: Number,
      default: 0
    },
    daysHavePassed: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      chartOptions: {
        indexAxis: 'y',
        layout: {
          padding: false,
          autoPadding: false
        },
        plugins: {
          legend: {
            display: false
          }
        },
        categoryPercentage: 0.2,
        maintainAspectRatio: false,
        scales: {
          x: {
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
            max: 700,
            afterBuildTicks: axis => axis.ticks = [0, 200, 400, 600].map(v => ({ value: v }))
          },
          y: {
            grid: {
              display: false
            },
            border: {
              display: false,
            }
          }
        }
      }
    }
  },
  computed: {
    chartData() {
      return {
        labels: [ 'TAT' ],
        datasets: [
          {
            data: [this.value],
            backgroundColor: 'rgba(33, 37, 41, 0.5)'
          }
        ]
      }
    }
  }
}
</script>
