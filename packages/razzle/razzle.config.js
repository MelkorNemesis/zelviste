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
  ]
};
