<template>
  <div class="container mt-2 flex flex-col">
    <NuxtErrorBoundary>
      <!-- SHOP SIDE BAR -->
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-row">
          <ServiceSideBar />

          <NuxtImg
            src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-localservice.jpeg"
            alt=""
            class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl"
          />
        </div>
        <div class="max-w-sm mb-2">
          資料來源:

          <ul>
            <li>
              <a href="https://www.facebook.com/groups/1604090173145820"
                >Facebook A7重劃區工商服務</a
              >
            </li>
            <li>
              <a href="https://www.facebook.com/groups/a7xinlinkou"
                >Facebook A7新林口－社區網站</a
              >
            </li>
          </ul>
          目前只提供長期登載的廣告，對短期張貼廣告將在下一階段開放自行登載看板！
        </div>
      </div>

      <!-- Nuxt Page  -->
      <NuxtPage />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600 mb-4">Sorry Something went wrong</h1>
          <code>{{ error }}</code>
          <button
            class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
            @click="error.value = null"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: `生活指引-在地服務`,
});
</script>
