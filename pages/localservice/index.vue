<template>
  <section class="w-full max-w-6xl not-prose">
    <h2>在地服務</h2>

    <div class="flex flex-col lg:flex-row flex-wrap">
      <div
        v-for="post in posts"
        :key="post._path"
        class="relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full"
      >
        <!-- <div class="shadow-lg w-full"> -->

        <div
          class="m-2 flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md"
        >
          <NuxtLink
            :to="post._path"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <NuxtImg
              :src="`${post.image}`"
              alt=""
              class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"
            />
          </NuxtLink>

          <!-- <NuxtImg
            :src="`${post.image}`"
            alt=""
            class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"
            @click="navigateTo(`${post._path}`)"
          /> -->

          <div class="p-4 flex flex-col">
            <div>
              <p class="text-bold">{{ post.title }}</p>

              <p v-show="post.address" class="mt-auto">
                地址: {{ post.address }}
              </p>
              <p v-show="post.phone" class="mt-auto">電話: {{ post.phone }}</p>
              <p v-show="post.email" class="mt-auto">郵箱: {{ post.email }}</p>
              <p v-show="post.hours" class="mt-auto">營業: {{ post.hours }}</p>
            </div>

            <div class="flex flex-row space-x-4">
              <a v-show="post.web" :href="post.web">
                <NuxtImg
                  class="h-12 hover:scale-150"
                  src="/images/logo/LOG-01-Web.jpeg"
                />
              </a>
              <a v-show="post.facebook" :href="post.facebook">
                <NuxtImg
                  class="h-12 hover:scale-150"
                  src="/images/logo/LOG-01-Facebook.png"
                />
              </a>
              <a v-show="post.line" :href="post.line">
                <NuxtImg
                  class="h-12 hover:scale-150"
                  src="/images/logo/LOG-01-Line.png"
                />
              </a>
              <a v-show="post.ig" :href="post.ig">
                <NuxtImg
                  class="h-12 hover:scale-150"
                  src="/images/logo/LOG-01-Ig.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("localservice-list", () =>
  queryContent("/localservice")
    .where({ _path: { $ne: "/localservice" } })
    .only([
      "_path",
      "title",
      "publishedAt",
      "category",
      "author",
      "sequence",
      "business",
      "web",
      "line",
      "facebook",
      "phone",
      "email",
      "hours",
      "address",
      "image",
      "imagel",
    ])
    .sort({ publishedAt: -1 })

    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastCategory = null;

  for (const post of data.value) {
    const publishedDate = new Date(post.publishedAt);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth() + 1; // Adding 1 because getMonth returns a zero-based index (0 for January)
    const day = publishedDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const category = post.category;

    const displayCategory = category !== lastCategory;

    post.displayCategory = displayCategory;
    post.categorykeep = category;
    post.fullDate = fullDate;
    result.push(post);
    lastCategory = category;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
