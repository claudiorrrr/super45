const path = require('path');

module.exports = function(eleventyConfig) {
  // Copy these directories to _site
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Log the absolute path to the data directory
  console.log("Data directory:", path.resolve(__dirname, "src/_data"));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
