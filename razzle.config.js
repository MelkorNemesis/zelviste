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
    const signInEntryPoint = require.resolve("./src/signIn");
    const polyfills = require.resolve("razzle/config/polyfills");

    if (target === "web") {
      // -- admin entry point
      const adminPaths = [polyfills, adminEntryPoint];
      if (dev) {
        const webpackHotDevClient = require.resolve(
          "razzle-dev-utils/webpackHotDevClient"
        );
        adminPaths.splice(1, 0, webpackHotDevClient);
      }
      config.entry.admin = adminPaths;

      // -- sign in entry point
      const signInPaths = [polyfills, signInEntryPoint];
      if (dev) {
        const webpackHotDevClient = require.resolve(
          "razzle-dev-utils/webpackHotDevClient"
        );
        signInPaths.splice(1, 0, webpackHotDevClient);
      }
      config.entry.signIn = signInPaths;

      // -- common
      if (dev) {
        config.output.filename = "static/js/bundle.[name].js";
      }
    }

    return config;
  }
};
