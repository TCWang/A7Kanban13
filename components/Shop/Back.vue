<template>
  <div class="container mb-4 mr-8 flex justify-end">
    <button @click="navigateTo(`/area/${area}/shop`)" class="btn btn-primary">
      回列表清單
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  area: Text,
});
</script>
