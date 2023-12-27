<template>
  <div
    class="w-full text-lg sm:text-xl md:text-2xl xl:text-3xl rounded-xl bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-lg sm:text-xl md:text-2xl xl:text-3xl rounded-full focus:outline-none"
      :class="cityError ? 'border-red-500 border' : ''"
      placeholder="請以 A7, A8, A9, 桃園 搜尋 ..."
      v-model="city"
    />
    <button class="bg-sky-500 px-5 text-white w-[100px]" @click="handleSearch">
      搜尋
    </button>
  </div>
</template>

<script setup>
const city = ref("");
const cityError = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/restaurant`);
};
</script>
