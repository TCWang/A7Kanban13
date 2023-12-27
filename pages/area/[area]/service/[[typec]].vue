<template>
  <div>
    <ServiceCards
      v-if="servicesOrganized.filtered.length"
      :services="servicesOrganized.filtered"
    />
    <h1 v-else class="text-red-600">沒有在地服務符合搜尋條件</h1>
  </div>
</template>

<script setup>
const route = useRoute();

import services from "@/data/services.json";

const servicesOrganized = {
  filtered: [...services]
    .filter((service) => {
      if (
        route.params.area === "0.A7重劃區" &&
        (route.params.typec === "所有" || route.params.typec === "")
      ) {
        return true;
      } else {
        if (route.params.area === "0.A7重劃區") {
          return service.type === route.params.typec;
        } else {
          if (route.params.typec === "所有" || route.params.typec === "") {
            return service.category === route.params.area;
          } else {
            return (
              service.category === route.params.area &&
              service.type === route.params.typec
            );
          }
        }
      }
    })
    .sort((a, b) => a.type.localeCompare(b.type)),
};
</script>
