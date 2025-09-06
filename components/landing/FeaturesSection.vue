<!-- components/landing/FeaturesSection.vue -->
<template>
<section class="w-full bg-black text-white py-20">
    <!-- Title -->
    <h2
    class="text-center font-normal text-7xl leading-[60px] mb-12"
    >
    Featured and seen in
    </h2>

    <!-- Features grid -->
    <div class="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto mb-16">
    <div
        v-for="(feature, index) in features"
        :key="index"
        class="w-[182px] h-[48px] flex items-center justify-center 
            rounded-2xl bg-white/10 border border-white/20 
            text-base font-medium shadow hover:bg-white/20 transition"
    >
        {{ feature }}
    </div>
    </div>

    <!-- Divider -->
    <div class="w-full flex justify-center">
    <div class="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
</section>
<!--  -------------------------------------------------------------------------------------------------  -->
<section class="w-full flex justify-center px-4 py-20">
    <div 
    class="max-w-5xl  transition-colors duration-100 ease-in-out"
    :class="isHovered ? 'text-white' : ''"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    >
    <p class="text-[60px] leading-[60px] font-satoshi ">
        <span class="text-white">
        In Chronicle everything is made with Blocks that come with pixel perfect design, 
        in
        </span>
        <span :class="isHovered ? 'text-white' : 'text-gray-400'">
        teractivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our 
        library of blocks and see the magic unfold.
        </span>
    </p>
    </div>
</section>
<!-- -------------------------------------------------------------------------------------------------  -->





</template>

<script setup>
const features = [
"Fast",
"Secure",
"Modern",
"Scalable",
"Responsive",
"User-Friendly"
]
import { ref } from 'vue'


const isHovered = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;700&display=swap');

.font-satoshi {
font-family: 'Satoshi', sans-serif;
}
</style>
