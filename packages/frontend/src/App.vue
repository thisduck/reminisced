<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  setup() {
    return {
      Layout,
    };
  },
};
</script>
