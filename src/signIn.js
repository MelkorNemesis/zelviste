import React, { Fragment } from "react";
import { render } from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { Formik } from "formik";

import {
  Button,
  ControlGroup,
  Label,
  Text,
  TextInput
} from "./admin/components/atoms";

import * as variables from "./admin/styles/variables";
import { GlobalStyles, Reset } from "./admin/components/styles";

const SignInForm = () => (
  <div
    style={{
      display: "flex",
      width: "400px",
      margin: "0 auto",
      padding: "0 20px",
      flexDirection: "column"
    }}
  >
    <Text.Header h1>Přihlašte se</Text.Header>
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={values => {
        console.log({ values });
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <ControlGroup>
            <Label>E-mail:</Label>
            <TextInput first name="email" type="text" onChange={handleChange} />
          </ControlGroup>

          <ControlGroup>
            <Label>Heslo:</Label>
            <TextInput
              name="password"
              type="password"
              onChange={handleChange}
            />
          </ControlGroup>

          <Button.Primary type="submit">Přihlásit</Button.Primary>
        </form>
      )}
    </Formik>
  </div>
);

const SignInContent = ({ className }) => (
  <section className={className}>
    <SignInForm />
  </section>
);

const StyledSignInContent = styled(SignInContent)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return <StyledSignInContent />;
};

render(
  <ThemeProvider theme={variables}>
    <Fragment>
      <Reset />
      <GlobalStyles />
      <App />
    </Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
