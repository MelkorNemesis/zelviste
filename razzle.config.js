"use strict";

module.exports = {
  plugins: [
    {
      name: "scss",
      options: {
        postcss: {
          dev: {
            sourceMap: false
          }
        }
      }
    }
  ],

  modify(config, { target, dev }) {
    const adminEntryPoint = require.resolve("./src/admin");
    const polyfills = require.resolve("razzle/config/polyfills");

    if (target === "web") {
      let paths = [polyfills, adminEntryPoint];
      if (dev) {
        const webpackHotDevClient = require.resolve(
          "razzle-dev-utils/webpackHotDevClient"
        );
        paths.splice(1, 0, webpackHotDevClient);
        config.output.filename = "static/js/bundle.[name].js";
      }
      config.entry.admin = paths;
    }

    return config;
  }
};
