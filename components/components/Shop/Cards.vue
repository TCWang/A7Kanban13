<template>
  <div class="">
    <h2>A7重劃區 商店匯總</h2>
    <p>
      <span class="text-red-600">可點選照片進入商店詳細介紹</span>,
      請選擇查詢區域及使用下拉選單選擇餐廳種類。 商店依據地址排序, 目前只提供
      A7重劃區 的商店黃頁。
    </p>
    <div class="flex flex-col lg:flex-row flex-wrap">
      <ShopCard
        v-for="shop in shops"
        :key="shop.id"
        :shop="shop"
        @favor="handleFavorite"
        :favored="shop.id in favorite"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  shops: Array,
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
