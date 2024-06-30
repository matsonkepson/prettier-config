const nonOverriddenDefaults = {
  endOfLine: "lf",
  tabWidth: 3,
  printWidth: 100,
  useTabs: false,
};

const config = {
  ...nonOverriddenDefaults,
  singleQuote: false,
  plugins: ["eslint-config-prettier", "eslint-plugin-prettier"],

  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 5,
      },
    },
  ],
};

modules.export = config;
