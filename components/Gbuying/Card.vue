<template>
  <div
    class="flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-[400px] md:w-[500px] h-[190px] md:h-[220px]"
    @click="navigateTo(`/gbuying/${gbuying.name}`)"
  >
    <div class="flex flex-row h-full bg-zinc-100 rounded-2xl shadow-md">
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/gbuying/${gbuying.figure}`"
        alt=""
        class="w-[120px] md:w-[200px] h-[120px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"
      />

      <div class="p-4 flex flex-col">
        <div>
          <h3 class="">
            {{ gbuying.name }}
          </h3>
          <!-- <p class="text-gray-700">
            {{ restaurant.description }}
          </p> -->

          <p class="mt-auto">
            <a :href="gbuying.google"> {{ gbuying.address }} </a>
          </p>
          <p v-show="gbuying.telphone" class="mt-auto">
            電話; {{ gbuying.telphone }}
          </p>
          <p v-show="gbuying.hours" class="mt-auto">
            營業: {{ gbuying.hours }}
          </p>
        </div>

        <div class="flex flex-row space-x-4">
          <a v-show="gbuying.web" :href="gbuying.web">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a v-show="gbuying.facebook" :href="gbuying.facebook">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            "
            />
          </a>
          <a v-show="gbuying.line" :href="gbuying.line">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  gbuying: Object,
});
</script>
