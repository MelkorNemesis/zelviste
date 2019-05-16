import { init } from "../src/server/db";

export async function run(cb) {
  try {
    init();
    await cb();
  } catch (err) {
    console.log({ err });
  } finally {
    process.exit();
  }
}
