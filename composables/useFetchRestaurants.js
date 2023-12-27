export default async (city, filters) => {
  const { data, error } = await useFetch(`/api/restaurants/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch restaurant in useFetchRestaurants ",
    });
  }

  return data;
};
