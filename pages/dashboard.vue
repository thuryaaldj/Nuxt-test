<script setup>
import MauChart from '~/components/charts/MauChart.vue'
import LineChart from '~/components/charts/LineChart.vue'

</script>

<template>
  <section class="min-h-screen bg-black p-8 md:p-12">
    
    <div class="flex flex-col md:flex-row justify-between items-center mb-10">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
        Dashboard
      </h1>
      <div class="flex items-center space-x-4 mt-4 md:mt-0">

      <NuxtLink
        to="/auth/login"
        class="mt-8 inline-block bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition"
      >
        Logout
      </NuxtLink>
      </div>
    </div>

    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-[#151515] p-6 rounded-2xl shadow-lg flex flex-col">
        <h2 class="text-xl font-semibold text-white mb-4">Monthly Active Users</h2>
        <MauChart />
      </div>

      
      <div class="bg-[#151515] p-6 rounded-2xl shadow-lg flex flex-col">
        <h2 class="text-xl font-semibold text-white mb-4">Revenue Overview</h2>
        <div class="flex-1 flex items-center justify-center text-gray-400">
          Chart Placeholder
          <LineChart/>
        </div>
      </div>
    </div>

    
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-[#151515] p-6 rounded-2xl shadow-lg flex flex-col items-center text-white">
        <span class="text-2xl font-bold">5.24k</span>
        <span class="mt-2 text-gray-200">Active Users</span>
      </div>
      <div class="bg-[#151515] p-6 rounded-2xl shadow-lg flex flex-col items-center text-white">
        <span class="text-2xl font-bold">1.2k</span>
        <span class="mt-2 text-gray-200">New Signups</span>
      </div>
      <div class="bg-[#151515] p-6 rounded-2xl shadow-lg flex flex-col items-center text-white">
        <span class="text-2xl font-bold">$12.5k</span>
        <span class="mt-2 text-gray-200">Revenue</span>
      </div>
    </div>
  </section>
</template>
