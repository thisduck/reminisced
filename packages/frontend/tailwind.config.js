const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.800"),
          a: {
            color: theme("colors.blue.700"),
            "&:hover": {
              color: theme("colors.blue.500"),
            },
          },
        },
      },
    }),

    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Roboto", ...defaultTheme.fontFamily.sans],
        logo: ["Cabin", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
