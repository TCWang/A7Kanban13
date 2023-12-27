<template>
  <div class="">
    <h2>A7重劃區 在地服務</h2>
    <p>
      <span class="text-red-600">可點選照片進入服務詳細介紹</span>,
      請選擇查詢區域及使用下拉選單選擇餐廳種類。
    </p>
    <div class="flex flex-col lg:flex-row flex-wrap">
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
        @favor="handleFavorite"
        :favored="service.id in favorite"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  services: Array,
});

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
