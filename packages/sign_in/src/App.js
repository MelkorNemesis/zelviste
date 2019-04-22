import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { AdminThemeProvider, FormikInput, Button, Text } from "@eshop/admin_ui";
import { validations } from "@eshop/common";

const API_URL = process.env.REACT_APP_API_URL;

const {
  formik: { validator, email, required }
} = validations;

const onSubmit = values => {
  fetch(`${API_URL}/auth`)
    .then(res => res.json())
    .then(json => console.log(json));
};

class App extends Component {
  render() {
    return (
      <AdminThemeProvider>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            email: "",
            password: ""
          }}
        >
          {() => {
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
      </AdminThemeProvider>
    );
  }
}

export default App;
