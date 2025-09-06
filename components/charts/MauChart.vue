<template>
  <div class="w-full max-w-4xl mx-auto p-4">
    <h2 class="text-xl font-bold mb-4 text-white">Monthly Active Users</h2>

    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Current Month',
      data: [120, 150, 180, 90, 130, 160, 200],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    },
    {
      label: 'Previous Month',
      data: [100, 130, 160, 80, 110, 140, 180],
      backgroundColor: 'rgba(168, 85, 247, 0.8)',
      borderColor: 'rgba(168, 85, 247, 1)',
      borderWidth: 1
    }
  ]
}


const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { 
      position: 'top', 
      labels: { 
        color: '#fff',
        font: {
          size: 14
        }
      } 
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      titleColor: '#fff',
      bodyColor: '#fff'
    }
  },
  scales: {
    x: { 
      ticks: { 
        color: '#fff',
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: { 
      ticks: { 
        color: '#fff',
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
  width: 100%;
}


:deep(.chartjs-render-monitor) {
  border-radius: 8px;
  background-color: rgba(17, 24, 39, 0.5);
  padding: 16px;
}
</style>