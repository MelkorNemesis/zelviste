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
  FormikCheckbox,
  FormikInput,
  FormikTextarea,
  Grid
} from "@eshop/admin_ui";
import { validations } from "@eshop/common";

import * as API from "../../../api";
import { productToForm } from "../../../mappers";

// validations
const { required, validator, number, integer, max, min } = validations.formik;

export const Product = () => {
  const {
    match: {
      params: { id }
    }
  } = useReactRouter();

  const { loading, done, error, result } = useFetchStatus(API.getProductById, {
    id
  })([id]);

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
                  <Grid.Item span={8}>
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

                  <Grid.Item span={4}>
                    <Text.Header h2 halfBottom>
                      Cena
                    </Text.Header>
                    <Section>
                      <Field
                        label="Cena s DPH"
                        name="price"
                        component={FormikInput}
                        validate={validator([
                          required,
                          number,
                          integer,
                          min(1)
                        ])}
                        type="number"
                        unit="Kč"
                      />
                      <Field
                        label="Sleva"
                        name="discount"
                        component={FormikInput}
                        validate={validator([number, integer, min(0)])}
                        type="number"
                        unit="Kč"
                        min={0}
                      />
                      <Field
                        label="DPH"
                        name="vat"
                        component={FormikInput}
                        validate={validator([
                          required,
                          number,
                          integer,
                          min(1),
                          max(100)
                        ])}
                        unit="%"
                        type="number"
                        min={1}
                        max={100}
                      />
                    </Section>
                  </Grid.Item>

                  <Grid.Item span={5}>
                    <Section>
                      <Field
                        label="Je aktivní"
                        name="is_active"
                        component={FormikCheckbox}
                      />
                      <Field
                        label="Je ve výprodeji"
                        name="is_on_sale"
                        component={FormikCheckbox}
                      />
                    </Section>
                  </Grid.Item>

                  <Grid.Item span={3}>
                    <Section>
                      <Field
                        label="Výška"
                        name="height"
                        component={FormikInput}
                        validate={validator([
                          required,
                          number,
                          integer,
                          min(1)
                        ])}
                        unit="mm"
                        type="number"
                        min={1}
                      />
                      <Field
                        label="Šířka"
                        name="width"
                        component={FormikInput}
                        validate={validator([
                          required,
                          number,
                          integer,
                          min(1)
                        ])}
                        unit="mm"
                        type="number"
                        min={1}
                      />
                      <Field
                        label="Délka"
                        name="length"
                        component={FormikInput}
                        validate={validator([
                          required,
                          number,
                          integer,
                          min(1)
                        ])}
                        unit="mm"
                        type="number"
                        min={1}
                      />
                      <Field
                        label="Váha"
                        name="weight"
                        component={FormikInput}
                        validate={validator([
                          required,
                          number,
                          integer,
                          min(1)
                        ])}
                        unit="g"
                        type="number"
                        min={1}
                      />
                    </Section>
                  </Grid.Item>
                </Grid>

                <Text.Header h2 halfBottom>
                  Popis
                </Text.Header>
                <Section>
                  <Field
                    name="description"
                    component={FormikTextarea}
                    validate={validator([required])}
                    rows={10}
                  />
                </Section>

                <Button.Primary type="submit">Uložit</Button.Primary>
              </Form>
            );
          }}
        </Formik>
      )}
    </Fragment>
  );
};
