<template>
  <h1>Hello {{ name }}!</h1>
  <div>Count: {{ count }}</div>
  <button class="px-2 py-1 text-white bg-blue-400 border border-black" @click="add">+</button>
</template>

<script>
import { ref } from "vue";

const name = "World";
const count = ref(0);
const add = () => count.value++;

export default {
  setup() {
    return {
      count,
      add,
      name,
    };
  },
};
</script>
