<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <NuxtImg
      :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/gbuying/${gbuying.figure}`"
      class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4"
      alt=""
    />
    <div class="md:w-2/3">
      <h1 class="mt-1">{{ gbuying.name }}</h1>
      <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
        <div class="flex-col">
          <p class="">
            地址:
            <a :href="gbuying.google">
              {{ gbuying.address }}
            </a>
          </p>
          <p v-show="gbuying.telphone" class="">電話: {{ gbuying.telphone }}</p>
          <p v-show="gbuying.hours" class="">營業時間: {{ gbuying.hours }}</p>
        </div>

        <p class="flex flex-row space-x-4">
          <a v-show="gbuying.web" :href="gbuying.web">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a v-show="gbuying.facebook" :href="gbuying.facebook">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            "
            />
          </a>
          <a v-show="gbuying.line" :href="gbuying.line">
            <NuxtImg
              class="h-12 hover:scale-150"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"
            />
          </a>
        </p>
        <h4>商品內容</h4>
        <p v-html="gbuying.goods"></p>
        <h4>訂購方式</h4>
        <p v-html="gbuying.order"></p>
        <h4>付款方法</h4>
        <p v-html="gbuying.payment"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  gbuying: Object,
});
</script>
