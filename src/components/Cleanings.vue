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
          <div class="text-center h3">1,00</div>
          <p>times on average was each machine cleaned per day within the <strong>current</strong> week</p>
        </div>
        <div class="ps-2 pe-xl-0">
          <div class="text-center h3">1,00</div>
          <p>times on average was each machine cleaned per day within the <strong>previous</strong> week</p>
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
  name: 'DispensingsByDate',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'current week', 'previous week' ],
        datasets: [
          {
            data: [1.0, 1.0],
            backgroundColor: ['rgba(33, 37, 41, 1)', 'rgba(33, 37, 41, 0.5)']
          }
        ]
      },
      chartOptions: {
        layout: {
          padding: false,
          autoPadding: false
        },
        plugins: {
          legend: {
            display: false
          }
        },
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
            max: 1.0,
            afterBuildTicks: axis => axis.ticks = [0, 0.5, 1.0].map(v => ({ value: v }))
          },
          x: {
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
  }
}
</script>
