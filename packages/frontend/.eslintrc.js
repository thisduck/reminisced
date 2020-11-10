module.exports = {
  extends: [
    "plugin:vue3/recommended",
    "plugin:prettier-vue/recommended",
    // Do not add `'prettier/vue'` if you don't want to use prettier for `<template>` blocks
    "prettier/vue",
  ],

  settings: {
    "prettier-vue": {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: "markdown" },

          // Treat the `<config>` block as a `.json` file
          config: { lang: "json" },

          // Treat the `<module>` block as a `.js` file
          module: { lang: "js" },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,
    },
  },

  rules: {},
};
