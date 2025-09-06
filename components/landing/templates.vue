<template>
  <section class="bg-black text-white py-20 px-4">
    <div class="container mx-auto max-w-6xl">
       
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-7xl font-bold mb-6">
        Start closer to the finish line with  
        templates made by industry experts
        </h1>

      </div>

      <!--  -->
      <div class="grid md:grid-cols-3 gap-8">
        <!--  1 -->
        <div class="bg-[#151515] rounded-xl p-8 border border-gray-800 hover:border-white transition-all duration-300">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fa-solid fa-certificate text-2xl text-blue-400"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Verified by experts</h3>
            <p class="text-gray-400">Templates created by the leading experts to help you deliver a powerful story</p>
          </div>
          
          <div class="border-t border-gray-800 pt-6">
            <h4 class="font-semibold mb-4 text-lg">Business Templates</h4>
            <ul class="space-y-3">
              <li v-for="item in businessTemplates" :key="item" class="flex items-center">
                <i class="fa-solid fa-check text-green-400 mr-3"></i>
                <span class="text-gray-300">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!--  2 -->
        <div class="bg-[#151515] rounded-xl p-8 border border-gray-800 hover:border-white transition-all duration-300">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fa-solid fa-star text-2xl text-green-400"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Verified by experts</h3>
            <p class="text-gray-400">Templates created by the leading experts to help you deliver a powerful story</p>
          </div>
          
          <div class="border-t border-gray-800 pt-6">
            <h4 class="font-semibold mb-4 text-lg">Strategy Templates</h4>
            <ul class="space-y-3">
              <li v-for="item in strategyTemplates" :key="item" class="flex items-center">
                <i class="fa-solid fa-check text-green-400 mr-3"></i>
                <span class="text-gray-300">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!--  3 -->
        <div class="bg-[#151515] rounded-xl p-8 border border-gray-800 hover:border-white transition-all duration-300">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fa-solid fa-award text-2xl text-purple-400"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Verified by experts</h3>
            <p class="text-gray-400">Start closer to the finish line with  
                                        templates made by industry experts</p>
          </div>
          
          <div class="border-t border-gray-800 pt-6">
            <h4 class="font-semibold mb-4 text-lg">Specialized Templates</h4>
            <ul class="space-y-3">
              <li v-for="item in specializedTemplates" :key="item" class="flex items-center">
                <i class="fa-solid fa-check text-green-400 mr-3"></i>
                <span class="text-gray-300">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      businessTemplates: [],
      strategyTemplates: [],
      specializedTemplates: []
    }
  },
  async mounted() {
  
    this.businessTemplates = [
      "Pitch decks",
      "All hands", 
      "Investor update",
      "Product roadmap"
    ];
    this.strategyTemplates = [
      "Research findings",
      "Marketing strategy",
      "North star goals"
    ];
    this.specializedTemplates = [
      
    ];
  }
}
</script>


<style scoped>

.container {
  max-width: 1200px;
}
</style>