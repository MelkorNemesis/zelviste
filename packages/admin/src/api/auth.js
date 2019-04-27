import { post } from "./helpers";

export function signOut() {
  return post("/auth/sign-out");
}
