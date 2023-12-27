<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <NuxtImg
      :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/restaurant/${restaurant.figure}`"
      class="w-full md:w-1/2 md:px-4"
      alt=""
    />
    <div class="w-full md:w-1/2">
      <h1 class="mt-1">{{ restaurant.type }} - {{ restaurant.name }}</h1>
      <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
        <div class="flex-col">
          <p class="">
            地址:
            <a :href="restaurant.google">
              {{ restaurant.address }}
            </a>
          </p>
          <p class="">電話: {{ restaurant.telphone }}</p>
          <p class="">營業時間: {{ restaurant.hours }}</p>

          <div
            v-if="restaurant.description"
            v-html="restaurant.description"
          ></div>
        </div>

        <p class="flex flex-row space-x-4">
          <a v-show="restaurant.web" :href="restaurant.web">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a v-show="restaurant.facebook" :href="restaurant.facebook">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            "
            />
          </a>
          <a v-show="restaurant.line" :href="restaurant.line">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"
            />
          </a>
          <a v-show="restaurant.ig" :href="restaurant.ig">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"
            />
          </a>
          <a v-show="restaurant.uber" :href="restaurant.uber">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Uber.jpeg"
            />
          </a>
          <a v-show="restaurant.panda" :href="restaurant.panda">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Panda.png"
            />
          </a>
        </p>
      </div>
      <div class="flex flex-row space-x-4">
        <a v-if="restaurant.menu" :href="restaurant.menu">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            查閱菜單
          </button>
        </a>
        <a v-if="restaurant.suggestion" :href="restaurant.suggestion">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦
          </button>
        </a>
        <a v-if="restaurant.suggestion2" :href="restaurant.suggestion2">
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
  restaurant: Object,
});
</script>
