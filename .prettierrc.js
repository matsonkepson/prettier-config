const nonOverriddenDefaults = {
   endOfLine: "lf",
   tabWidth: 2,
   printWidth: 100,
   useTabs: false,
};

const config = {
   ...nonOverriddenDefaults,
   singleQuote: false,

   overrides: [
      {
         files: "*.json",
         options: {
            tabWidth: 2,
         },
      },
   ],
};

modules.export = config;
