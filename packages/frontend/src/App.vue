<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
const name = "World";

export default {
  setup() {
    return {
      name,
    };
  },
};
</script>
