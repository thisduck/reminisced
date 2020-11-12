<template>
  <form @submit.prevent="submit">
    <div class="max-w-3xl mx-auto">
      <div class="flex mt-1 rounded-md shadow-sm">
        <div class="relative flex items-stretch flex-grow focus-within:z-10">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            ref="link"
            id="link"
            class="block w-full pl-10 rounded-none form-input rounded-l-md transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            placeholder="http link"
          />
        </div>
        <Button>Save</Button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";

export default {
  inheritAttrs: false,
  emits: ["change"],
  setup(_, { emit }) {
    const link = ref(null);
    const submit = () => {
      const url = link.value.value;
      emit("submit", { url, done: () => (link.value.value = "") });
    };

    return {
      link,
      submit,
      Button
    };
  },
};
</script>
