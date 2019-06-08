import React, { Fragment } from "react";
import { floor, getVatAmount } from "@eshop/common";
import { Formik, Form, Field } from "formik";
import {
  Button,
  Text,
  Section,
  FormikCheckbox,
  FormikInput,
  FormikSelect,
  FormikTextarea,
  Grid,
  Separator
} from "@eshop/admin_ui";

import {
  validator,
  required,
  number,
  integer,
  min,
  max
} from "@eshop/common/lib/validations/formik";

import { formatNestedCategoryName } from "../../../utils";

export function ProductForm({
  formData,
  handleSubmit,
  product,
  manufacturers,
  categories,
  vats
}) {
  return (
    <Fragment>
      <Formik initialValues={formData} onSubmit={handleSubmit}>
        {({ values }) => {
          const finalPrice = values.price_with_vat - values.discount || 0;
          const vatAmount = floor(
            getVatAmount({
              price: finalPrice,
              vat: product.vat.value
            })
          );

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
                      name="price_with_vat"
                      component={FormikInput}
                      validate={validator([required, number, integer, min(1)])}
                      type="number"
                      unit="Kč"
                    />
                    <Field
                      label="Sleva"
                      name="discount"
                      component={FormikInput}
                      validate={validator([
                        number,
                        integer,
                        min(0),
                        max(values.price_with_vat)
                      ])}
                      type="number"
                      unit="Kč"
                      min={0}
                      max={200}
                    />
                    <Field
                      label="DPH"
                      name="id_vat"
                      component={FormikSelect}
                      options={vats.map(v => ({
                        value: v.id,
                        label: `${v.value} %`
                      }))}
                      validate={validator([required])}
                    />
                    <Separator />
                    <div>
                      Konečná cena:{" "}
                      <strong>
                        {finalPrice}
                        {product.currency}
                      </strong>
                    </div>
                    <div>
                      DPH: {vatAmount} {product.currency}
                    </div>
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
}
