<template>
  <div class="container" v-if="gbuying">
    <h1>團購介紹</h1>
    <GbuyingDetailHero :gbuying="gbuying" />
    <!-- <RestaurantDetailAttributes :features="restaurant.features" />
    <RestaurantDetailDescription :description="restaurant.description" />
    <RestaurantDetailContact /> -->

    <GbuyingBack />
  </div>
</template>

<script setup>
const { gbuyings } = useGbuyings();
const route = useRoute();

const gbuying = computed(() => {
  return gbuyings.find((gbuying) => {
    return gbuying.name === route.params.name;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!gbuying.value) {
  throw createError({
    statusCode: 404,
    message: `Group Buying  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `團購熱搜:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
