<template>
  <Layout>
    <BookmarkInput @submit="submit" />
  </Layout>
</template>

<script>
import { ref } from "vue";
import BookmarkInput from "./components/BookmarkInput.vue";
import Layout from "./components/Layout.vue";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";

const addBookmarkMutation = gql`
  mutation addBookmark($url: String!) {
    addBookmark(url: $url) {
      id
      url
    }
  }
`;

export default {
  setup() {
    const { mutate: addBookmark, onDone } = useMutation(addBookmarkMutation);
    const submit = ({ url, done }) => {
      addBookmark({ url });
      onDone(done);
    };

    return {
      submit,
      BookmarkInput,
      Layout,
    };
  },
};
</script>
