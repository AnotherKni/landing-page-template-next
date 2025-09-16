module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Only add prefixes for browsers we support
      overrideBrowserslist: [
        "last 2 versions",
        "> 1%",
        "not dead",
        "not ie 11",
        "not op_mini all",
        "Chrome >= 60",
        "Firefox >= 60",
        "Safari >= 12",
        "Edge >= 79",
      ],
    },
    // Remove unused CSS in production
    ...(process.env.NODE_ENV === "production" && {
      cssnano: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            colormin: true,
            minifySelectors: true,
          },
        ],
      },
    }),
  },
};
