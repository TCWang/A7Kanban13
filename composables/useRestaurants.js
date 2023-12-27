import restaurants from "@/data/restaurants.json";
import types from "@/data/types.json";

export const useRestaurants = () => {
  return {
    restaurants,
    types,
  };
};
