<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <NuxtImg
      :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/shop/${shop.figure}`"
      class="w-full md:w-1/2 md:px-4"
      alt=""
    />
    <div class="w-full md:w-1/2">
      <h1 class="mt-1">{{ shop.type }} - {{ shop.name }}</h1>
      <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
        <div class="flex-col">
          <p class="">
            地址:
            <a :href="shop.google">
              {{ shop.address }}
            </a>
          </p>
          <p class="">電話: {{ shop.telphone }}</p>
          <p class="">營業時間: {{ shop.hours }}</p>
        </div>

        <p class="flex flex-row space-x-4">
          <a v-show="shop.web" :href="shop.web">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a v-show="shop.facebook" :href="shop.facebook">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            "
            />
          </a>
          <a v-show="shop.line" :href="shop.line">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"
            />
          </a>
          <a v-show="shop.ig" :href="shop.ig">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"
            />
          </a>
        </p>
      </div>
      <div class="flex flex-row space-x-4">
        <a v-if="shop.suggestion" :href="shop.suggestion">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦
          </button>
        </a>
        <a v-if="shop.suggestion2" :href="shop.suggestion2">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦 2
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  shop: Object,
});
</script>
