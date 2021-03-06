const plugins = require("./rollup.config").plugins;

module.exports = function configure(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: "",

    plugins: ["@metahub/karma-rollup-preprocessor", "karma-*"],

    // list of files / patterns to load in the browser
    files: ["index.js", "node_modules/babel-polyfill/dist/polyfill.js"],

    preprocessors: {
      "index.js": ["rollup"]
    },

    rollupPreprocessor: {
      options: {
        plugins,
        // will help to prevent conflicts between different tests entries
        format: "iife",
        output: {
          format: "iife",
          sourcemap: "inline"
        }
      }
    },

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ["progress"],

    coverageReporter: {
      reporters: [
        {
          type: "lcov"
        }
      ]
    },

    // web server port
    port: 9874,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ["Chrome"],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
