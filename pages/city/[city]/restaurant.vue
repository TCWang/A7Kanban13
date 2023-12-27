<template>
  <div class="container mt-2 flex flex-col">
    <NuxtErrorBoundary>
      <!-- Restaurant SIDE BAR -->
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-row">
          <RestaurantSideBar />

          <NuxtImg
            src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-restaurant.jpeg"
            alt=""
            class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl"
          />
        </div>
        <div class="max-w-sm ml-2 mb-2">
          資料來源:
          <ul>
            <li>
              痞客邦
              <a
                href="https://sdhouse.pixnet.net/blog/post/108815656?fbclid=IwAR1Jsu9IvgBJCLVEUxu_wnwMn8pu-ILAB9VZ1j08zksnlm19tn9pIgpQpu4"
                >林口美食新餐廳
              </a>
            </li>
            <li>
              Facebook
              <a href="https://www.facebook.com/LinkouGourmet">林口食食樂 </a>
            </li>
            <li>
              Facebook
              <a href="https://www.facebook.com/groups/1951117865015671"
                >A7重劃區大小事
              </a>
            </li>
            <li>
              Facebook
              <a href="https://www.facebook.com/linkou.map"
                >林口龜山美食旅遊地圖
              </a>
            </li>
          </ul>
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
  title: `生活指引-餐廳推薦: ${route.params.city} 生活圈`,
});

definePageMeta({
  layout: "custom",
});
</script>
