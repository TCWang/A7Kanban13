<template>
  <div class="container mt-2">
    <NuxtErrorBoundary>
      <!-- Groud Buying -->
      <div class="float float-row">
        <h1>在地服務</h1>
        <div class="w-full md:w-4/5 bg-zinc-100 rounded-md shadow-md">

          <p>
            在地服務將以自主張貼廣告的形式，提供A7重劃區居民自主張貼。包含
            <ul>
              <li>
                對A7提供服務作業的廠商張貼廣告，如各項工商服務，居家服務等。
              </li>
              <li>
                提供A7重劃區居民的個人商品交易，如二手物品買賣交換等。
              </li>
              <li>
                作業模式將開放給使用Google 帳號登入註冊的會員免費刊登。將提供交易雙向溝通管道。
              </li>
              <li>
                禁止非法活動，及妨礙優良社會的事項在此刊登。同時希望使用者都能保持友善和諧的交流, 避免人身攻擊及不友善的社交言論！
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div class="">
        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-under-construction.webp"
          alt="Under Construction"
          class="float-right w-[200px]"
        ></NuxtImg>
      </div>

      <!-- <GbuyingCards /> -->

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
  title: `在地服務`,
});

definePageMeta({
  layout: "custom",
});
</script>
