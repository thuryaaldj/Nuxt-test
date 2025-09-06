<template>
  
  <div
    class="group bg-[#222] rounded-2xl p-8 shadow-lg flex flex-col gap-6 hover:shadow-xl transition-all duration-300 w-[589px] h-[685.72px]"
  >
    
    <div class="grid grid-cols-3 grid-rows-3 w-full h-1/2">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="flex items-center justify-center border border-white/10 
               backdrop-blur-xl bg-gradient-to-br from-[rgba(26,26,26,0.5)] 
               via-[rgba(21,21,21,0.5)] to-[rgba(16,16,16,0.5)] relative rounded-3xl"
      >
        
        <div
          class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-30 rounded-xl"
        ></div>

        
        <FontAwesomeIcon
          v-if="box.icon"
          :icon="['fab', box.icon]"
          class="relative z-10 text-gray-400 text-4xl transition-colors duration-300 group-hover:text-[var(--fa-color)]"
          :style="{ '--fa-color': box.color }"
        />
      </div>
    </div>

    
    <div class="text-center flex-1 flex flex-col justify-center">
      <h3 class="font-bold text-[36.96px] leading-[38px] text-white mb-3">
        Easy to customise. <br />
        Hard to get wrong.
      </h3>
      <p class="font-light text-[18px] leading-[27px] text-gray-400">
        Blocks are responsive and designed to be
        customised easily. No matter how you edit,
        they will always look stunning.
      </p>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFigma, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons'

library.add(faFigma, faTwitter, faSpotify)


const boxes = [
  { icon: 'figma', color: '#ec4899' },   // box 1
  {},                                    // box 2
  {},                                    // box 3
  {},                                    // box 4
  { icon: 'twitter', color: '#38bdf8' }, // box 5 
  {},                                    // box 6
  {},                                    // box 7
  { icon: 'spotify', color: '#22c55e' }, // box 8
  {},                                    // box 9
]
</script>
