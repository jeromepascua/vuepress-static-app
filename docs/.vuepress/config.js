  const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: ["./docs/.vuepress/theme/**/*.vue", "./!(node_modules)/**/*.md", "./*.md"],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
  });

  module.exports = {
    title: 'Asd.Ai',
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
      ]
    }
  };
