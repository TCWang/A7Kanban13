<template>
  <div
    class="relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full"
  >
    <!-- <div class="shadow-lg w-full"> -->
    <img
      class="absolute w-7 right-2 top-1 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt=""
      @click="emit('favor', service.id)"
    />
    <div
      class="m-2 flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md"
    >
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/${service.figureLogo}`"
        alt=""
        class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"
        @click="navigateTo(`/service/${service.name}-${service.id}`)"
      />

      <div class="p-4 flex flex-col">
        <div>
          <p class="text-bold">{{ service.type }} - {{ service.name }}</p>

          <p class="mt-auto">
            <a :href="service.google"> {{ service.address }} </a>
          </p>
          <p class="mt-auto">電話: {{ service.telphone }}</p>
          <p v-show="service.email" class="mt-auto">
            郵箱: {{ service.email }}
          </p>
          <p class="mt-auto">營業: {{ service.hours }}</p>
        </div>

        <div class="flex flex-row space-x-4">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import heartFilled from "@/assets/img/logo/LOG-02-heartFilled.png";
import heartOutline from "@/assets/img/logo/LOG-02-heartOutline.png";

const props = defineProps({
  service: Object,
  favored: Boolean,
});

const emit = defineEmits(["favor"]);
</script>

<style scoped></style>
