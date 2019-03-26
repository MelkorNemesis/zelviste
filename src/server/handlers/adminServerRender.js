import * as HttpStatus from "http-status-codes";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export async function adminServerRender(req, res) {
  res.status(HttpStatus.OK).send(
    `<!doctype html>
        <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${
            assets.admin.css
              ? `<link rel="stylesheet" href="${assets.admin.css}">`
              : ""
          }
          ${
            process.env.NODE_ENV === "production"
              ? `<script src="${assets.admin.js}" defer></script>`
              : `<script src="${assets.admin.js}" defer crossorigin></script>`
          }
        </head>
        <body>
          <div id="root"></div>
        </body>
    </html>`
  );
}
