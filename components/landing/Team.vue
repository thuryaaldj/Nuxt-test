<template>
  <div class="bg-black text-white min-h-screen px-6 py-12 space-y-24">
    <!-- Team collaboration -->
    <section class="text-center space-y-6">
      <p class="text-blue-400 text-2xl">✦ Team collaboration</p>
      <h2 class="text-5xl font-bold">
        Rediscover the joy in storytelling.
      </h2>

      <div class="grid md:grid-cols-3 gap-6 mt-10">
        <!-- Card 1 -  -->
        <div
          class="bg-neutral-900 rounded-2xl p-6 h-[435px] transition-all duration-500 hover:shadow-[0_0_25px_#fff] flex flex-col items-center text-center"
        >
          <img
            src="/users.png"
            alt="card image"
            class="w-40 h-40 object-contain mx-auto mb-6"
          />

          <h3 class="text-4xl font-semibold mb-3">Craft together.</h3>
          <p class="text-gray-400 flex-1 overflow-y-auto">
            Create, craft and share stories together with real-time collaboration
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-neutral-900 rounded-2xl p-6 h-[435px] flex flex-col justify-center transition-all duration-500 hover:shadow-[0_0_25px_#fff] group"
        >
          <h3
            class="text-4xl font-extrabold transition-colors duration-300 group-hover:text-pink-400"
          >
            This year has been
            <span class="text-pink-400">massive</span>
            for us!
          </h3>
          <p class="text-gray-400 mt-4">
            Engage your audience with fun mentions and interactive effects
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-neutral-900 rounded-2xl p-6 h-[435px] transition-all duration-500 hover:shadow-[0_0_25px_#fff] flex flex-col"
        >
          <img
            src="/mouse.png"
            alt="card image"
            class="w-full h-40 object-cover rounded-lg mb-6"
          />

          <h3 class="text-4xl font-semibold mb-3">Express yourself.</h3>
          <p class="text-gray-400 flex-1">
            Make presentations human and fun again with reactions and emojis
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>