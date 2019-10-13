//console.log("NODE_ENV", process.env.NODE_ENV);
// NOTE THAT PURGECSS IS ALREADY SETUP FOR VUE
//Note that we have "Themes" in for now. Remove when we move away from the themes folder
module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["./src/css"]
    }),
    require("tailwindcss")("./assets/css/tailwindcss/tailwindcss.config.js"),
    require("autoprefixer")({
      grid: false,
      browsers: [">1%"]
    }),

    ...(process.env.NODE_ENV !== "development"
      ? [          
          require("@fullhuman/postcss-purgecss")({
            content: [
              "./layouts/**/*.html",
              "./components/**/**/*.html",
              "./themes/**/**/*.html",
              "./assets/js/app/**/*.vue"
            ],
            extractors: [
              {
                extractor: class {
                  static extract(content) {
                    //console.log(process.env.NODE_ENV);
                    return content.match(/[A-z0-9-:\/]+/g);
                    //return content.match(/[A-z0-9-:\/]+/g) || [];
                  }
                },
                extensions: ["vue", "html"]
              }
            ],
            whitelist: [
              "clip",
              "fill-current",
              "hs-button",
              "hs-email",
              "hs-form",
              "hs-input",
              "screen-reader-text",
              "tnd-Nav__item",
              "is-active"
            ]
          }),
          require("cssnano")({
            preset: "default"
          })
        ]
      : []) //If Development, do not use PurgeCSS
  ]
};
