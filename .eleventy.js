module.exports = function(eleventyConfig) {
  // Copy USWDS fonts, images, icons, and JS
  eleventyConfig.addPassthroughCopy({
    "node_modules/@uswds/uswds/dist/fonts": "assets/fonts",
    "node_modules/@uswds/uswds/dist/img": "assets/img",
    "node_modules/@uswds/uswds/dist/js": "assets/js/uswds"
  });
  
  // Copy custom assets and admin
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");
  
  // Copy images from posts
  eleventyConfig.addPassthroughCopy({
    "src/images": "images"
  });
  
  // Date filter for posts
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
