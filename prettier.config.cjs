/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  bracketSameLine: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: false,
}
