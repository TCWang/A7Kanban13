<template>
  <div class="container" v-if="restaurant">
    <h1>餐廳介紹</h1>
    <RestaurantDetailHero :restaurant="restaurant" />
    <!-- <RestaurantDetailAttributes :features="restaurant.features" />
    <RestaurantDetailDescription :description="restaurant.description" />
    <RestaurantDetailContact /> -->

    <RestaurantBack />
  </div>
</template>

<script setup>
const { restaurants } = useRestaurants();
const route = useRoute();
const { capitalizeFirstLetter } = useUtilities();

const restaurant = computed(() => {
  return restaurants.find((restaurant) => {
    return restaurant.id === route.params.id;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!restaurant.value) {
  throw createError({
    statusCode: 404,
    message: `Restaurant with ID of ${route.params.id} does not exist`,
  });
}

useHead({
  title: `餐廳推薦:${route.params.name}`,
  // title: capitalizeFirstLetter(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>
