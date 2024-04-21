<template>
  <div class="">
    <h2>餐廳推薦</h2>
    <p>
      <span class="text-red-600">可點選照片進入餐廳詳細介紹</span>,
      請輸入查詢區域 (A7, A8, A9, 桃園)及使用下拉選單選擇餐廳種類。
      餐廳依據地址排序
    </p>
    <div class="flex flex-col lg:flex-row flex-wrap">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
        @favor="handleFavorite"
        :favored="restaurant.id in favorite"
      />
    </div>
  </div>
</template>

<script setup>
// const { restaurants } = useRestaurants();

const props = defineProps({
  restaurants: Array,
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
