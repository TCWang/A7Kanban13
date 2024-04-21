<template>
  <div class="row" v-if="isHeader">
    <h4 class="header item2">類別</h4>
    <h4 class="header item4">編號</h4>
    <h4 class="link item1">採購指南</h4>
  </div>
  <div
    v-else
    class="row"
    :style="
      index % 2 === 0
        ? { background: 'rgba(128,128,128,0.15)' }
        : { background: 'rgba(255,255,255,0.1)' }
    "
  >
    <p class="header item2">{{ category }}</p>
    <p class="header item4">{{ id }}</p>
    <a :href="`/procurement/${item}`" class="link item1 hover:bg-indigo-100">
      {{ item }}</a
    >
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  item: string;
  category: string;
  key: string;
  id: string;
  description: string;
  contribution?: string;
  vote?: string;
  index: number;
  isHeader?: boolean;
}

const props = defineProps<RowProps>();
</script>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}
.header {
  margin: 0;
  margin-right: 0rem;
  padding: 0rem 0rem;
  font-weight: 400;
  /* width: auto; */
}
.item1 {
  color: black;
  width: 80%;
  margin-right: 1rem;
}
.item2 {
  color: black;
  width: 12%;
  margin-right: 1rem;
}
.item3 {
  text-decoration: none;
  width: 8%;
  font-weight: 500;
}
.item4 {
  text-decoration: none;
  width: 8%;
  font-weight: 500;
}
.link {
  margin: 0;
  margin-right: 1rem;
  padding: 0.1rem 0.1rem;
  font-weight: 400;
  color: rgb(10, 31, 148);
}
</style>
