<template>
  <div>
    <!-- <RestaurantCards v-if="restaurants.length" :restaurants="restaurants" /> -->
    <RestaurantCards
      v-if="restaurantsOrganized.filtered.length"
      :restaurants="restaurantsOrganized.filtered"
    />

    <!-- <RestaurantCards /> -->
    <h1 v-else class="text-red-600">沒有餐廳符合搜尋條件</h1>
  </div>
</template>

<script setup>
const route = useRoute();
// const restaurants = await useFetchRestaurants(route.params.city, {
//   //   minPrice: route.query.minPrice,
//   //   maxPrice: route.query.maxPrice,
//   type: route.params.type,
// });

// watch(
//   () => route.query,
//   () => {
//     window.location.reload(true);
//   }
// );

import restaurants from "@/data/restaurants.json";

// const restaurantsOrganized = {
//   filtered: [...restaurants]
//     .filter((restaurant) => {
//       if (route.params.type === "" || route.params.type === "所有餐廳") {
//         return (
//           restaurant.category.toLowerCase() === route.params.city.toLowerCase()
//         );
//       } else {
//         return (
//           restaurant.category.toLowerCase() ===
//             route.params.city.toLowerCase() &&
//           restaurant.type === route.params.type
//         );
//       }
//     })
//     .sort((a, b) => a.address.localeCompare(b.address)),
// };

const restaurantsOrganized = {
  filtered: [...restaurants]
    .filter((restaurant) => {
      if (route.params.type === "" || route.params.type === "所有餐廳") {
        return restaurant.category === route.params.city;
      } else {
        return (
          restaurant.category === route.params.city &&
          restaurant.type === route.params.type
        );
      }
    })
    .sort((a, b) => a.address.localeCompare(b.address)),
};
</script>
