<template>
  <div class="p-4 w-32">
    <div class="text-xl">
      <span v-if="loading">Saving ...</span>
      <span v-if="!loading">Saved!</span>
    </div>
  </div>
</template>

<script>
import bookmarkCreate from "../src/graphql/bookmark/create";

export default {
  setup() {
    const createBookmark = bookmarkCreate();

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function ([
      { id, url },
    ]) {
      if (!url) return;

      createBookmark.mutate({ url });
      createBookmark.onDone(() => {
        setTimeout(() => window.close(), 750);
      });
    });

    return {
      loading: createBookmark.loading,
    };
  },
};
</script>
