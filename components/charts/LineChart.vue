<template>
  <div class="chart-container">
    <h2 class="text-xl font-semibold mb-4">Users Charts</h2>
    <div class="relative h-80">
      <canvas ref="chartCanvas" class="w-full h-full"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

export default {
  name: 'UserChart',
  setup() {
    const chartCanvas = ref(null)
    let chartInstance = null

    onMounted(() => {
      if (process.client) { 
        initChart()
      }
    })

    const initChart = () => {
      if (!chartCanvas.value) return
      
      Chart.register(...registerables)
      
     
      if (chartInstance) {
        chartInstance.destroy()
      }
      
const ctx = chartCanvas.value.getContext('2d')
      
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
          datasets: [
            {
              label: ' Users count',
              data: [65, 59, 80, 81, 56, 55],
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              fill: true,
              tension: 0.4,
              pointBackgroundColor: '#4f46e5',
              pointBorderColor: '#fff',
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              rtl: true,
              labels: {
                usePointStyle: true,
                padding: 20,
                font: {
                  family: 'Tajawal, sans-serif',
                },
              },
            },
            tooltip: {
              rtl: true,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              titleFont: {
                family: 'Tajawal, sans-serif',
              },
              bodyFont: {
                family: 'Tajawal, sans-serif',
              },
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  family: 'Tajawal, sans-serif',
                },
              },
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                font: {
                  family: 'Tajawal, sans-serif',
                },
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
            },
          },
        },
      })
    }

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy()
      }
    })

    return {
      chartCanvas,
    }
  },
}
</script>

<style scoped>
.chart-container {
  direction: rtl;
}
</style>