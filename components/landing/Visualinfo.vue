<template>
  <section class="max-w-[1202px] mx-auto my-20 flex flex-col gap-10">
    <!-- Top Card -->
    <div
      class=" bg-gradient-to-b from-[#222222] to-[#050505] rounded-xl shadow-lg relative overflow-hidden p-10 flex flex-col lg:flex-row gap-8 text-white ">
      <!-- Left: Text -->
      <div class="flex-1 flex flex-col justify-center text-center lg:text-left gap-5">
        <h2 class="font-satoshi font-bold text-[46.88px] leading-[48px] text-white">
          World class <br />
          information design at <br />
          your fingertips
        </h2>
        <p
          class="font-satoshi font-light text-[18px] leading-[27px] text-gray-400 max-w-[462px] mx-auto lg:mx-0"
        >
          Blocks are carefully crafted to help you distill powerful
          messages from your information and data – no matter how
          complex.
        </p>
      </div>
      <!-- Right: Chart -->
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">5.7K </h1>
        <LineChart />
      </div>
    </div>

    <!-- Bottom Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <!-- Left Card -->
<div
  class="bg-[#222] rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 h-[100%]"
>
  <!-- Chart -->
<div
  class="flex justify-end h-[320px]"
  style="background-image: url('left.png');"
>
  <div class="rounded-xl pt-20 shadow-inner w-[250px] h-[320px] bg-[#151515]">
    <MauChart class="h-full w-full" />
  </div>
</div>

  <!-- Text -->
  <div class="text-center flex-1 flex flex-col justify-center mt-6">
    <h3 class="font-satoshi font-bold text-[36.96px] leading-[38px] text-white mb-3">
      A window into your work.
    </h3>
    <p class="font-satoshi font-light text-[18px] leading-[27px] text-gray-400">
      Simply paste a link to any of the hundreds
      of tools you use and Chronicle will
      seamlessly package your outputs.
    </p>
  </div>
</div>

<!-- Right Card -->
<IconCard />
    </div>
  </section>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue";
import MauChart from "@/components/charts/MauChart.vue";
import IconCard from '~/components/IconCard.vue'

export default {
  name: "DashboardPage",
  components: {
    LineChart,
    MauChart,
    IconCard,
  },
};
</script>