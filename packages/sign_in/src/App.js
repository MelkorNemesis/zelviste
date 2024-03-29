import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import {
  EmotionAdminThemeProvider,
  FormikInput,
  Button,
  Text,
  FormError
} from "@eshop/admin_ui";
import { validations } from "@eshop/common";

import request from "./request";

const API_URL = process.env.REACT_APP_API_URL;

function redirectToAdmin() {
  window.location.href = process.env.REACT_APP_ADMIN_URL;
}

const {
  formik: { validator, email, required }
} = validations;

const onSubmit = ({ email, password }, { setStatus }) => {
  setStatus(undefined);

  request(`${API_URL}/auth`, {
    method: "POST",
    body: JSON.stringify({ email, password })
  })
    .then(() => {
      redirectToAdmin();
    })
    .catch(err => {
      if (err.detail === "EMAIL_INVALID") {
        setStatus("Neexistující e-mail.");
      } else if (err.detail === "PASSWORD_INVALID") {
        setStatus("Špatně zadané heslo.");
      } else {
        setStatus(`Neznámá chyba. ${err.message}`);
        console.log({ err });
      }
    });
};

class App extends Component {
  componentDidMount() {
    request(`${API_URL}/user`)
      .then(() => {
        redirectToAdmin();
      })
      .catch(() => {
        console.info("Error occured, not redirecting to admin.");
      });
  }

  render() {
    return (
      <EmotionAdminThemeProvider>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            email: "",
            password: ""
          }}
        >
          {({ status }) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  maxWidth: "400px",
                  width: "100%",
                  margin: "0 auto",
                  padding: "10px"
                }}
              >
                <Form
                  style={{
                    width: "100%"
                  }}
                >
                  <Text.Header h1>Přihlášení</Text.Header>
                  {status && <FormError>{status}</FormError>}
                  <Field
                    name="email"
                    label="E-mail"
                    component={FormikInput}
                    validate={validator([required, email])}
                  />
                  <Field
                    name="password"
                    type="password"
                    label="Heslo"
                    component={FormikInput}
                    validate={validator([required])}
                  />
                  <Button type="submit">Přihlásit</Button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </EmotionAdminThemeProvider>
    );
  }
}

export default App;
