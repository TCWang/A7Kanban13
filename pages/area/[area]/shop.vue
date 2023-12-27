<template>
  <div class="container mt-2 flex flex-col">
    <NuxtErrorBoundary>
      <!-- SHOP SIDE BAR -->
      <div class="flex flex-row">
        <ShopSideBar />

        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-yellowpage.png"
          alt=""
          class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl"
        />
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
  title: `生活指引-採購黃頁`,
});

definePageMeta({
  layout: "custom",
});
</script>
