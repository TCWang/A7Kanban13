<template>
  <div>
    <h1>A7新林口-社區網站: 生活指引資訊平台</h1>
    <NuxtImg
      src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-a7kanban10.png"
      class="flex flex-row w-20"
      alt="A7-生活指引 QRCode"
    />
    <p>A7 重劃區 生活指引資訊平台</p>
    <div
      class="relative h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-RestaurantBanner1.jpeg')]"
    >
      <div class="z-10 absolute w-full h-full flex justify-center items-center">
        <div class="text-center w-5/6 md:w-4/5 xl:w-3/4">
          <p
            class="text-lg sm:text-xl md:text-2xl xl:text-3xl mb-10 text-white"
          >
            大林口找餐廳
          </p>
          <RestaurantSearchBar />
        </div>
      </div>
      <div class="z-1 absolute w-full h-full bg-black opacity-30"></div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "A7-生活指引",
  meta: [
    { name: "description", content: "A7新林口-社區網站: 生活指引資訊平台 " },
  ],
});
</script>

<style scoped></style>
