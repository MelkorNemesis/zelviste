import yargs from 'yargs'

import { run } from "./helpers";
import { sha512, getRandomString } from "../src/server/utils";
import { AdminUser } from "../src/server/model";

run(() => {
  const salt = getRandomString();
  const hash = sha512({ password: "Melkor1990", salt });

  return AdminUser.query().insert({
    firstname: "Michal",
    surname: "Ševčík",
    email: "sevcik.mi@gmail.com",
    salt,
    hash
  });
});
