<template>
  <div class="container" v-if="service">
    <h1>服務介紹</h1>

    <ServiceDetail :service="service" />

    <ServiceBack :area="service.area" />
  </div>
</template>

<script setup>
const { services } = useServices();
const route = useRoute();

const service = computed(() => {
  return services.find((service) => {
    return service.id === route.params.id;
  });
});

if (!service.value) {
  throw createError({
    statusCode: 404,
    message: `Restaurant with ID of ${route.params.id} does not exist`,
  });
}

useHead({
  title: `在地服務:${route.params.name}`,
});
</script>
