<template>
  <div class="flex flex-row flex-wrap">
    <GbuyingCard
      v-for="gbuying in gbuyings"
      :key="gbuying.id"
      :gbuying="gbuying"
    />
  </div>
</template>

<script setup>
const { gbuyings } = useGbuyings();
</script>
