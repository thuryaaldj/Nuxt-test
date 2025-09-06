<template>
  <div class="min-h-screen flex flex-col bg-black text-slate-900 antialiased">
    <Navbar />
    <main class="flex-1">
        <Hero/>
        <FeaturesSection/>
        <Visualinfo/>
        <Workflow/>
        <Team/>
        <MobileExperience/>
        <Templates/>
        <Finalsec/>

    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/ui/Navbar.vue'
import Hero from '@/components/landing/Hero.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue' 
import Team from '@/components/landing/Team.vue'
import Visualinfo from '@/components/landing/Visualinfo.vue'
import Workflow from '@/components/landing/Workflow.vue'
import MobileExperience from '@/components/landing/MobileExperience.vue'
import Templates from '~/components/landing/templates.vue'
import Finalsec from '~/components/landing/Finalsec.vue'
import Footer from '~/components/ui/Footer.vue'




</script>