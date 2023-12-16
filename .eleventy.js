const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addWatchTarget("src/img/");

  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addWatchTarget("src/js/");

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