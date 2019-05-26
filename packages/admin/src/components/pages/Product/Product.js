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
  FormikSelect,
  FormikTextarea,
  Grid
} from "@eshop/admin_ui";
import { validations } from "@eshop/common";

import * as API from "../../../api";
import { productToForm } from "../../../mappers";
import { flattenCategories, formatNestedCategoryName } from "../../../utils";

// validations
const { required, validator, number, integer, max, min } = validations.formik;

export const Product = () => {
  // prettier-ignore
  const { match: { params: { id } } } = useReactRouter();

  // fetch data
  const { loading, error, result } = useFetchStatus(() => {
    const _product = API.getProductById({ id });
    const _categories = API.getCategories();
    const _manufacturers = API.getManufacturers();
    return Promise.all([_product, _categories, _manufacturers]);
  })([id]);

  if (loading) return <Spinner>Nahrávám produkt...</Spinner>;
  if (error) return <Err>Chyba při načítání produktu: {error.message}</Err>;
  if (!result) return null;

  // destructure fetched data
  const [productResponse, categoriesResponse, manufacturersresponse] = result;

  const product = productResponse.json.data;
  const formData = productToForm(product);
  const categories = Array.from(
    flattenCategories(categoriesResponse.json.data)
  );
  const manufacturers = manufacturersresponse.json.data;

  const handleSubmit = values => {
    console.log({ values });
  };

  return (
    <Fragment>
      <Formik initialValues={formData} onSubmit={handleSubmit}>
        {() => {
          return (
            <Form>
              <Text.Header h1 first>
                {product.name}
              </Text.Header>
              <Grid>
                <Grid.Item span={10}>
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
                    <Field
                      label="Výrobce"
                      name="id_manufacturer"
                      component={FormikSelect}
                      validate={validator([required])}
                      options={manufacturers.map(m => ({
                        label: m.name,
                        value: m.id
                      }))}
                      prompt="-- zvolit --"
                    />
                    <Field
                      label="Kategorie"
                      name="id_category"
                      component={FormikSelect}
                      validate={validator([required])}
                      options={categories.map(c => ({
                        label: formatNestedCategoryName(c),
                        value: c.id
                      }))}
                      prompt="-- zvolit --"
                    />
                  </Section>
                </Grid.Item>

                <Grid.Item span={6}>
                  <Text.Header h2 halfBottom>
                    Cena
                  </Text.Header>
                  <Section>
                    <Field
                      label="Cena s DPH"
                      name="price"
                      component={FormikInput}
                      validate={validator([required, number, integer, min(1)])}
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
                  <Text.Header h2 halfBottom>
                    Vlastnosti
                  </Text.Header>
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
                    <Field
                      label="Skladem"
                      name="stock_quantity"
                      validate={validator([number, integer])}
                      component={FormikInput}
                      unit="ks"
                      type="number"
                    />
                  </Section>
                </Grid.Item>

                <Grid.Item span={11}>
                  <Text.Header h2 halfBottom>
                    Rozměry
                  </Text.Header>
                  <Section>
                    <Grid>
                      <Grid.Item span={8}>
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
                      </Grid.Item>
                      <Grid.Item span={8}>
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
                      </Grid.Item>
                      <Grid.Item span={8}>
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
                      </Grid.Item>
                      <Grid.Item span={8}>
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
                      </Grid.Item>
                    </Grid>
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
    </Fragment>
  );
};
