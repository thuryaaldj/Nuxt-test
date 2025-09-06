<template>
  <section class="bg-black text-white py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div class="lg:w-1/2">
          <h2 class="text-7xl md:text-7xl font-bold mb-6">
            Present anywhere. Anytime.
          </h2>
          <p class="text-2xl text-gray-300 mb-10">
            Transform your stories into a bite-sized format tailored for mobile. Quickly browse the summary and dive deeper when needed.
          </p>
          

        </div>
        
        
        <div class="lg:w-1/2 relative">
          <div class="relative rounded-2xl overflow-hidden ">
            <img 
              src="/women.png" 
              alt="Presentation illustration" 
              class="w-full h-auto object-cover"
            />
            
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
          </div>
          
          
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>