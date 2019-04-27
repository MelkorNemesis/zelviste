import { Container } from "unstated";
import { noopLog } from "@eshop/common";

import * as API from "../api";

export class UserContainer extends Container {
  state = {
    user: null
  };

  get isLoggedIn() {
    return this.state.user !== null;
  }

  get name() {
    const { firstname, surname } = this.state.user;
    return `${firstname} ${surname}`;
  }

  signIn() {
    return API.user()
      .then(({ json }) => {
        this.setState({ user: json.data });
      })
      .catch(err => {
        throw err;
      });
  }

  signOut() {
    return API.signOut()
      .catch(noopLog)
      .finally(() => {
        window.location.href = process.env.REACT_APP_SIGN_IN_URL;
      });
  }
}
