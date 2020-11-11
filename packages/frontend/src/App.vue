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
import gql from "graphql-tag";
import { useMutation, useQuery } from "@vue/apollo-composable";

const addBookmarkMutation = gql`
  mutation addBookmark($url: String!) {
    addBookmark(url: $url) {
      id
      url
    }
  }
`;

const bookmarksQuery = gql`
  query bookmarks {
    bookmarks {
      id
      url
    }
  }
`;

export default {
  setup() {
    const { mutate: addBookmark, onDone } = useMutation(addBookmarkMutation);
    const { result, loading, refetch } = useQuery(bookmarksQuery);
    const submit = ({ url, done }) => {
      addBookmark({ url });
      onDone(() => {
        done();
        refetch();
      });
    };

    return {
      submit,
      BookmarkInput,
      Layout,
      result,
      loading,
    };
  },
};
</script>
