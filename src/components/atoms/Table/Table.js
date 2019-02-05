import React from "react";
import cx from "classnames";

import "./Table.scss";

export const Table = ({ className, children, ...rest }) => (
  <table className={cx(className, "Table")} {...rest}>
    {React.Children.toArray(children).filter(
      c => c.type === TBody || c.type === THead
    )}
  </table>
);

export const TBody = ({ className, children, ...rest }) => (
  <tbody className={cx(className, "Table__body")} {...rest}>
    {React.Children.toArray(children).filter(c => c.type === Row)}
  </tbody>
);

export const THead = ({ className, children, ...rest }) => (
  <thead className={cx(className, "Table__head")} {...rest}>
    {React.Children.toArray(children).filter(c => c.type === Row)}
  </thead>
);

export const Row = ({ className, children, ...rest }) => (
  <tr className={cx(className, "Table__row")} {...rest}>
    {React.Children.toArray(children).filter(
      c => c.type === Col || c.type === HCol
    )}
  </tr>
);

export const Col = ({ className, children, ...rest }) => (
  <td className={cx(className, "Table__col")} {...rest}>
    {children}
  </td>
);

export const HCol = ({ className, children, ...rest }) => (
  <th className={cx(className, "Table__hcol")} {...rest}>
    {children}
  </th>
);
