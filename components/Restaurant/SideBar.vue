<template>
  <div class="shadow border w-64 mr-10 z-30 h-[90px] md:h-[110px]">
    <!-- LOCATION START -->
    <div class="p-2 flex justify-auto relative cursor-pointer border-b">
      <h3 class="mr-2">地區</h3>
      <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border shadow left-44 p-5 top-5 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          @click="onChangeLocation"
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
        >
          更改地區
        </button>
      </div>
    </div>
    <!-- LOCATION END -->

    <!-- TYPE START -->
    <div class="p-2 flex justify-auto relative cursor-pointer border-b">
      <h3 class="mr-2">種類</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('type')">
        {{ route.params.type || "所有餐廳" }}
      </h3>
      <div
        class="absolute border shadow left-4 p-5 top-10 -m-1 w-[400px] flex justify-between flex-wrap bg-white"
        v-if="modal.type"
      >
        <h4
          v-for="type in types"
          :key="type"
          class="hover:text-yellow-700 hover:text-bold w-1/3"
          @click="onChangeType(type)"
        >
          {{ type }}
        </h4>
      </div>
    </div>
    <!-- TYPE END -->

    <!-- PRICE START -->
    <!-- <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>價格</h3>
         <h3 class="text-blue-400 capitalize" @click="updateModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        class="absolute border sahow left-56 p-5 top-1 -m-1 bg-white"
        v-if="modal.price"
      >
        <input
          class="border p-1 rounded"
          type="number"
          placeholder="Min"
          v-model="priceRange.min"
        />
        <input
          class="border p-1 rounded"
          type="number"
          placeholder="Max"
          v-model="priceRange.max"
        />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangePrice"
        >
          Apply
        </button>
      </div>   
    </div> -->
    <!-- PRICE END -->
  </div>
</template>

<script setup>
const { types } = useRestaurants();
const modal = ref({
  type: false,
  location: false,
  // price: false,
});
const city = ref("");
// const priceRange = ref({
//   min: "",
//   max: "",
// });
const route = useRoute();
const router = useRouter();

// const priceRangeText = computed(() => {
//   const minPrice = route.query.minPrice;
//   const maxPrice = route.query.maxPrice;

//   if (!minPrice && !maxPrice) return "Any";
//   else if (!minPrice && maxPrice) {
//     return `< $${maxPrice}`;
//   } else if (minPrice && !maxPrice) {
//     return `> $${minPrice}`;
//   } else {
//     return `$${minPrice}-$${maxPrice}`;
//   }
// });

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/restaurant/${route.params.type}`);
  city.value = "";
};

const onChangeType = (type) => {
  updateModal("type");
  navigateTo(`/city/${route.params.city}/restaurant/${type}`);
};

// const onChangePrice = () => {
//   updateModal("price");
//   if (priceRange.value.max && priceRange.value.min) {
//     if (priceRange.value.min > priceRange.value.max) return;
//   }
//   router.push({
//     query: {
//       minPrice: priceRange.value.min,
//       maxPrice: priceRange.value.max,
//     },
//   });
// };
</script>
