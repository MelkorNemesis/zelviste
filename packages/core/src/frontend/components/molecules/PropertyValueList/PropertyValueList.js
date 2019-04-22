import React from "react";
import cx from "classnames";

import { Table, TBody, Row, HCol, Col } from "../../atoms";

import "./PropertyValuesList.scss";

export const PropertyValueList = ({ className, data, ...rest }) => {
  return (
    <Table className={cx("PropertyValueList", className)} {...rest}>
      <TBody>
        {data.map(({ property, value }) => (
          <Row key={property}>
            <HCol className="PropertyValueList__prop">{property}</HCol>
            <Col>{value}</Col>
          </Row>
        ))}
      </TBody>
    </Table>
  );
};
