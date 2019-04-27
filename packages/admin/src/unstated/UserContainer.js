import { Container } from "unstated";
import { get } from "../api";

const user = {
  id: 1,
  email: "sevcik.mi@gmail.com"
};

export class UserContainer extends Container {
  state = {
    user: null
  };

  get isLoggedIn() {
    return this.state.user !== null;
  }

  signIn() {
    console.log("signing in");
    return get("/user")
      .then(({ json }) => {
        this.setState({ user: json.data });
      })
      .catch(err => {
        throw err;
      });
  }

  signOut() {
    console.log("signing out");
  }
}
