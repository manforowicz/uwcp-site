const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("showDate", (date) => 
    date.toLocaleDateString('en-GB', { month: "long", year: "numeric", day: "numeric" })
  );


  return {
    dir: {
      input: "src",
    }
  }
};