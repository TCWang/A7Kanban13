<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <NuxtImg
      :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/${service.figure}`"
      class="w-full md:w-1/2 md:px-4"
      alt=""
    />
    <div class="w-full md:w-1/2">
      <h3 class="mt-1">{{ service.type }} - {{ service.name }}</h3>
      <div class="mt-3 border-b pb-5 justify-between">
        <div class="flex-col">
          <p v-show="service.address" class="">
            地址:
            <a :href="service.google">
              {{ service.address }}
            </a>
          </p>
          <p v-show="service.telphone" class="">電話: {{ service.telphone }}</p>
          <p v-show="service.hours" class="">營業時間: {{ service.hours }}</p>
        </div>

        <p class="flex flex-row space-x-4">
          <a v-show="service.web" :href="service.web">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a v-show="service.facebook" :href="service.facebook">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            "
            />
          </a>
          <a v-show="service.line" :href="service.line">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"
            />
          </a>
          <a v-show="service.ig" :href="service.ig">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"
            />
          </a>
        </p>
      </div>
      <div class="flex flex-row space-x-4">
        <a v-if="service.suggestion" :href="service.suggestion">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦
          </button>
        </a>
        <a v-if="service.suggestion2" :href="service.suggestion2">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦 2
          </button>
        </a>
      </div>
      <div
        class="mt-2"
        v-if="service.description"
        v-html="service.description"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: Object,
});
</script>
