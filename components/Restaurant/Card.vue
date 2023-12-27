<template>
  <div
    class="relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full md:h-[250px]"
  >
    <img
      class="absolute w-7 right-2 top-1 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt=""
      @click="emit('favor', restaurant.id)"
    />
    <div
      class="flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md"
    >
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/restaurant/${restaurant.figureLogo}`"
        alt=""
        class="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-full rounded-xl transform hover:scale-110 duration-200"
        @click="navigateTo(`/restaurant/${restaurant.name}-${restaurant.id}`)"
      />

      <div class="p-4 flex flex-col">
        <div>
          <p class="text-bold">{{ restaurant.type }} - {{ restaurant.name }}</p>
          <!-- <p class="text-gray-700">
            {{ restaurant.description }}
          </p> -->

          <p class="mt-auto">
            <a :href="restaurant.google"> {{ restaurant.address }} </a>
          </p>
          <p class="mt-auto">電話; {{ restaurant.telphone }}</p>
          <p class="mt-auto">營業: {{ restaurant.hours }}</p>
        </div>

        <div class="flex flex-row space-x-4">
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
          <a v-show="restaurant.menu" :href="restaurant.menu">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Menu.jpeg"
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
  restaurant: Object,
  favored: Boolean,
});

const emit = defineEmits(["favor"]);

// const favored = useState(`favored-${props.restaurant.id}`, () => {
//   return false;
// });
</script>
