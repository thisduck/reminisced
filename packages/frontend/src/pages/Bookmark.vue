<template>
  <div class="mb-2 overflow-hidden bg-white rounded-lg shadow max-w-2xl mx-auto">
    <div class="px-4 py-5 sm:p-6" v-if="!loading">
      <div class="font-bold mb-4 text-3xl">{{ result.bookmark.article.title }}</div>
      <div class="prose" v-html="result.bookmark.article.content" />
    </div>
  </div>
</template>

<script>
import bookmarkRead from "../graphql/bookmark/read";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const readBookmark = bookmarkRead(route.params);

    return {
      result: readBookmark.result,
      loading: readBookmark.loading,
    };
  },
};
</script>
