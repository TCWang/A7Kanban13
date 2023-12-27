import services from "@/data/services.json";
import areas from "@/data/areas.json";
import typecs from "@/data/typecs.json";

export const useServices = () => {
  return {
    services,
    areas,
    typecs,
  };
};
