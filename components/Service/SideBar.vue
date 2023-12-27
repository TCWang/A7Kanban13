<template>
  <div class="shadow border w-[200px] mr-10 z-30 h-[140px] md:h-[156px]">
    <!-- AREA START -->
    <div
      v-if="false"
      class="p-2 flex justify-auto relative cursor-pointer border-b"
    >
      <h3 class="mr-2">站別</h3>
      <h3 @click="updateModal('station')" class="text-blue-400 capitalize">
        A7
      </h3>
      <div
        v-if="false"
        class="absolute border shadow left-44 p-5 top-5 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="station" />
        <button
          @click="onChangeStation"
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
        >
          更改站別
        </button>
      </div>
    </div>
    <!-- AREA END -->

    <!-- TYPEC START -->
    <div class="p-2 flex justify-auto relative cursor-pointer border-b">
      <h3 class="mr-2">種類</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('typec')">
        {{ route.params.typec || "所有類別" }}
      </h3>
      <div
        class="absolute border shadow left-44 p-5 top-2 -m-1 w-[240px] flex justify-between flex-wrap bg-white"
        v-if="modal.typec"
      >
        <h4
          v-for="typec in typecs"
          :key="typec"
          class="hover:text-yellow-700 hover:text-bold w-1/3"
          @click="onChangeTypec(typec)"
        >
          {{ typec }}
        </h4>
      </div>
    </div>
    <!-- TYPEC END -->

    <!-- SECTION START -->
    <div
      v-if="false"
      class="p-2 flex justify-auto relative cursor-pointer border-b"
    >
      <h3 class="mr-2">地區</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('area')">
        {{ route.params.area || "所有地區" }}
      </h3>
      <div
        class="absolute border shadow left-4 p-5 top-10 -m-1 w-[240px] flex justify-between flex-wrap bg-white"
        v-if="modal.area"
      >
        <h4
          v-for="area in areas"
          :key="area"
          class="hover:text-yellow-700 hover:text-bold w-full"
          @click="onChangeArea(area)"
        >
          {{ area }}
        </h4>
      </div>
    </div>
    <!-- SECTION END -->
  </div>
</template>

<script setup>
const { areas, typecs } = useServices();
const station = ref("");
const modal = ref({
  typec: false,
  area: false,
  station: false,
});

const route = useRoute();
const router = useRouter();

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeArea = (area) => {
  updateModal("area");
  navigateTo(`/area/${area}/service/${route.params.typec}`);
};

const onChangeTypec = (typec) => {
  updateModal("typec");
  navigateTo(`/area/${route.params.area}/service/${typec}`);
};

const onChangeStation = (station) => {
  updateModal("station");
  navigateTo(`/area/${route.params.area}/service/${route.params.typec}`);
};
</script>
