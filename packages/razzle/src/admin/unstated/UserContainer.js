import { Container } from "unstated";

export class UserContainer extends Container {
  state = {
    user: null
  };

  get isLoggedIn() {
    return false;
  }

  login() {
    console.log("logging in");
  }

  logout() {
    console.log("logging out");
  }
}
