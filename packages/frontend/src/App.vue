<template>
  <Layout>
    <div class="mb-6">
      <BookmarkInput @submit="submit" />
    </div>
    <div
      v-if="!loading"
      class="mb-2 overflow-hidden bg-white rounded-lg shadow"
      v-for="bookmark of result.bookmarks"
      :key="bookmark.id"
    >
      <div class="px-4 py-5 sm:p-6">{{ bookmark.url }}</div>
    </div>
  </Layout>
</template>

<script>
import { ref } from "vue";
import BookmarkInput from "./components/BookmarkInput.vue";
import Layout from "./components/Layout.vue";
import bookmarkCreate from "./graphql/bookmark/create";
import bookmarkReadAll from "./graphql/bookmark/read-all";

export default {
  setup() {
    const createBookmark = bookmarkCreate();
    const readAllBookmarks = bookmarkReadAll();
    const submit = ({ url, done }) => {
      createBookmark.mutate({ url });
      createBookmark.onDone(() => {
        done();
        readAllBookmarks.refetch();
      });
    };

    return {
      submit,
      BookmarkInput,
      Layout,
      result: readAllBookmarks.result,
      loading: readAllBookmarks.loading,
    };
  },
};
</script>
