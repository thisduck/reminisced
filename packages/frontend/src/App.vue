<template>
  <Layout>
    <BookmarkInput />
  </Layout>
</template>

<script>
import { ref } from "vue";
import BookmarkInput from "./components/BookmarkInput.vue";
import Layout from "./components/Layout.vue";

const name = "World";
const count = ref(0);
const add = () => count.value++;

export default {
  setup() {
    return {
      count,
      add,
      name,
      BookmarkInput,
      Layout,
    };
  },
};
</script>
