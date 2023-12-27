import shops from "@/data/shops.json";
import areas from "@/data/areas.json";
import typecs from "@/data/typecs.json";

export const useShops = () => {
  return {
    shops,
    areas,
    typecs,
  };
};
