import React, { Fragment } from "react";
import useReactRouter from "use-react-router";
import { Formik, Form, Field } from "formik";
import {
  Button,
  Err,
  Spinner,
  Text,
  useFetchStatus,
  Section,
  FormikInput,
  Grid
} from "@eshop/admin_ui";
import { validations } from "@eshop/common";

import * as API from "../../../api";
import { productToForm } from "../../../mappers";

// validations
const { required, validator, number, integer } = validations.formik;

export const Product = () => {
  const { match } = useReactRouter();
  const { loading, done, error, result } = useFetchStatus(API.getProductById, {
    id: match.params.id
  })([match.params.id]);

  const product = result && result.data;
  const formData = (product && productToForm(product)) || {};

  const handleSubmit = values => {
    console.log({ values });
  };

  return (
    <Fragment>
      {loading && <Spinner>Nahrávám produkt...</Spinner>}
      {error && <Err>Chyba při načítání produktu: {error.message}</Err>}
      {done && product && (
        <Formik initialValues={formData} onSubmit={handleSubmit}>
          {() => {
            return (
              <Form>
                <Text.Header h1 first>
                  {product.name}
                </Text.Header>
                <Grid>
                  <Grid.Item>
                    <Text.Header h2 halfBottom>
                      Základní informace
                    </Text.Header>
                    <Section>
                      <Field
                        label="Název"
                        name="name"
                        component={FormikInput}
                        validate={validator([required])}
                      />
                      <Field
                        label="SEO URL"
                        name="seo_url"
                        component={FormikInput}
                        validate={validator([required])}
                      />
                      <Field
                        label="EAN"
                        name="ean"
                        component={FormikInput}
                        validate={validator([required])}
                      />
                      <Field
                        label="Kód"
                        name="code"
                        component={FormikInput}
                        validate={validator([required])}
                      />
                    </Section>
                  </Grid.Item>

                  <Grid.Item>
                    <Text.Header h2 halfBottom>
                      Cena
                    </Text.Header>
                    <Section>
                      <Field
                        label="Cena s DPH"
                        name="price"
                        component={FormikInput}
                        validate={validator([required, number, integer])}
                        type="number"
                        unit="Kč"
                      />
                      <Field
                        label="Sleva"
                        name="discount"
                        component={FormikInput}
                        validate={validator([required, number, integer])}
                        type="number"
                        unit="Kč"
                      />
                      <Field
                        label="DPH"
                        name="vat"
                        component={FormikInput}
                        validate={validator([required, number, integer])}
                        type="number"
                        unit="%"
                      />
                    </Section>
                  </Grid.Item>
                </Grid>

                <Text.Header h2 halfBottom>
                  Popis
                </Text.Header>
                <Section>Hovno 3</Section>

                <Button.Primary type="submit">Uložit</Button.Primary>
              </Form>
            );
          }}
        </Formik>
      )}
    </Fragment>
  );
};
