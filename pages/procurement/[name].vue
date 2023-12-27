<template>
  <NuxtLayout name="detailpage">
    <div class="container procurement-container">
      <h1>採購指南 詳細資料: {{ procurement.id }} - {{ procurement.item }}</h1>
      <!-- <div class="image-container">
        <img :src="`@/assets/fig/${house.Figure}`" alt="" />
      </div> -->

      <div class="w-full">
        <div class="info-container">
          <div v-html="procurement.description"></div>
        </div>
      </div>
    </div>
    <procurementBack />
  </NuxtLayout>
</template>

<script setup>
import procurements from "@/data/procurements.json";
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "採購指南 - " + name,
});

const procurement = procurements.find((r) => r.item === name);

// useMeta({
//   title: house.value ? name : "404 - House Not Found",
//   meta: [
//     {
//       name: "viewport",
//       content: "width=device-width",
//     },
//   ],
// });
// Test
</script>

<style scoped></style>
