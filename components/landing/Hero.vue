<template>
  <section
    class="relative flex flex-col items-center justify-center text-center min-h-screen text-white bg-cover bg-center"
    style="background-image: url('Hero.png');"
  >
    <!-- Overlay لتغميق الخلفية -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Container -->
    <div
      class="relative bg-black/70 shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] px-8 py-12 rounded-xl max-w-[780px] w-full"
    >
      <!-- العنوان الرئيسي -->
      <h1
        class="text-white font-inter font-semibold text-[95px] leading-[115px] text-center capitalize"
      >
        Your Shortcut To
      </h1>

      <!-- الكلمة المتحركة -->
      <h2
        class="animated-text font-inter font-semibold text-[95px] leading-[115px] text-center capitalize"
      >
        Everything
      </h2>


      <p class="mt-6 text-gray-300 text-lg leading-relaxed">
        Build your projects faster with our modern UI components, ready-to-use templates, and seamless integrations.
      </p>

      <!-- زر Get Started -->
      <NuxtLink
        to="/auth/register"
        class="mt-8 inline-block bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition"
      >
        Get Started
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>  
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap");

@keyframes moveAndColor {
  0% {
    transform: translateX(0);
    color: white;
  }
  33% {
    transform: translateX(20px);
    color: #ff69b4; 
  }
  66% {
    transform: translateX(-20px);
    color: #9370DB; 
  }
  100% {
    transform: translateX(0);
    color: white;
  }
}

.animated-text {
  animation: moveAndColor 3s infinite ease-in-out;
}
</style>
