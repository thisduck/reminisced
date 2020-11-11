<template>
  <div class="mb-6">
    <BookmarkInput @submit="submit" />
  </div>
  <template v-if="!loading">
    <div
      class="mb-2 overflow-hidden bg-white rounded-lg shadow max-w-2xl mx-auto"
      v-for="bookmark of result.bookmarks"
      :key="bookmark.id"
    >
      <div class="px-4 py-5 sm:p-6">
        <div class="font-bold mb-1 text-lg">
          <router-link
            :to="{ name: 'Bookmark', params: { id: bookmark.id } }"
            v-if="bookmark.article"
          >{{ bookmark.article.title }}</router-link>
          <a :href="bookmark.url" target="_blank" v-if="!bookmark.article">{{ bookmark.url }}</a>
        </div>
        <div v-if="bookmark.article" class="text-sm">{{ bookmark.article.excerpt }}</div>
      </div>
    </div>
  </template>
</template>

<script>
import { ref } from "vue";
import BookmarkInput from "../components/BookmarkInput.vue";
import bookmarkCreate from "../graphql/bookmark/create";
import bookmarkReadAll from "../graphql/bookmark/read-all";

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
      result: readAllBookmarks.result,
      loading: readAllBookmarks.loading,
    };
  },
};
</script>
