/** @type {import("prettier").Config} **/
export default {
  plugins: ["prettier-plugin-astro"], // Add astro plugin explicitly
  overrides: [
    {
      files: "*.astro", // Apply specific options to .astro files
      options: {
        parser: "astro", // Use the Astro parser for .astro files
        bracketSameLine: true, // Keep opening and closing brackets on the same line
        jsxSingleQuote: false,
        useTabs: true, // Use tabs instead of spaces for indentation
        singleAttributePerLine: true, // Limit the number of attributes per line
      },
    },
  ],
};
