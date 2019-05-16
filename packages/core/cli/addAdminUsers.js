import program from "commander";

import { run } from "./helpers";
import { sha512, getRandomString } from "../src/server/utils";
import { AdminUser } from "../src/server/model";

program.option("--email <email>", "User email");
program.option("--password <password>", "User password");
program.option("--firstname <firstname>", "User firstname");
program.option("--surname <surname>", "User surname");
program.parse(process.argv);

const { email, password, firstname, surname } = program;
if (!email || !password || !firstname || !surname) {
  console.error("Missing arguments");
  process.exit();
}

run(async () => {
  const salt = getRandomString();
  const hash = sha512({ password, salt });

  await AdminUser.query().insert({
    firstname,
    surname,
    email,
    salt,
    hash
  });

  console.info(`Successfully created user <${email}>`);
});
