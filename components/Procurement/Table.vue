<template>
  <div class="container">
    採購指南列表: 請點擊 <mark>採購項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <ProcurementRow :isHeader="true" />
        <ProcurementRow
          v-for="(procurement, index) in procurementsOrganized.newSorted"
          :key="procurement.id"
          :id="procurement.id"
          :item="procurement.item"
          :category="procurement.category"
          :description="procurement.description"
          :contribution="procurement.contribution"
          :vote="procurement.vote"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import procurements from "@/data/procurements.json";

const procurementsOrganized = {
  newSorted: [...procurements],
};
</script>

<style scoped></style>
