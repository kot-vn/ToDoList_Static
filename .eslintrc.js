module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    _: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["prettier", "prettier/vue", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/no-v-html": "off",
    "unicorn/prefer-text-content": "off",
  },
};
