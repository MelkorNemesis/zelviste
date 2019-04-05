import * as HttpStatus from "http-status-codes";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export async function adminServerRender(req, res) {
  const authenticated = true;

  if (!authenticated) {
    return res.redirect("/admin/sign-in", HttpStatus.UNAUTHORIZED);
  }

  return res.status(HttpStatus.OK).send(
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
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&amp;subset=latin-ext" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
        </body>
    </html>`
  );
}
