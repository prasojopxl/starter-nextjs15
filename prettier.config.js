/** @type {import("prettier").Config} */
module.exports = {
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindConfig: "./tailwind.config.js",
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
};
