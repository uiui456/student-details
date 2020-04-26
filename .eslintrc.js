module.exports = {
    globals: {
      process: false,
    },
    parserOptions: {
      sourceType: "script",
      ecmaVersion: 9,
    },
    env: {
      node: true,
      es6: true,
    },
    overrides: [
      {
        files: ["**/src/**/*.js", "styleguide/**/*.js", "*.test.js"],
        parser: "babel-eslint",
        env: {
          node: false,
          "shared-node-browser": true,
        },
        parserOptions: {
          sourceType: "module",
        },
      },
    ],
  };
  