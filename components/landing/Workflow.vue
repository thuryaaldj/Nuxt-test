<template>
  <section class="bg-black text-white py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        
        <div class="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <h2 
            class="text-7xl md:text-7xl font-bold mb-6 leading-tight"
            :class="{ 'animate-fade-in-up': isTitleVisible }"
          >
            Create at the speed of thought
          </h2>
          <p 
            class="text-xl text-gray-300 mb-8 leading-relaxed"
            :class="{ 'animate-fade-in-up delay-300': isTextVisible }"
          >
            Focus on getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you.
          </p>
          
          
        </div>
        
        
        <div class="lg:w-1/2 relative">
          <div class="relative">
            <img 
              src="/scroll.png" 
              alt="Chronicle App Interface" 
              class="w-full h-auto rounded-lg shadow-2xl"
            />
            
            <div class="absolute -inset-4 bg-blue-500/10 rounded-lg blur-2xl -z-10"></div>
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
      isTitleVisible: false,
      isTextVisible: false
    }
  },
  mounted() {
    
    setTimeout(() => {
      this.isTitleVisible = true
    }, 100)
    
    setTimeout(() => {
      this.isTextVisible = true
    }, 500)
    
    
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1202px;
}


.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-300 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.scroll-effect {
  transition: all 0.5s ease-out;
}
</style>