import React from "react";
import styled from "styled-components";

const StyledTableList = styled.div`
  table {
    width: 100%;
    border-spacing: 0 ${({ theme }) => theme.spacing_s};
    border-collapse: separate;
    font-weight: 500;

    thead {
      th {
        padding: ${({ theme: { spacing_s } }) =>
          `${spacing_s} ${spacing_s}`};

        color: ${({ theme }) => {
          console.log({ theme });
          return theme.c_text_alt;
        }};
        text-align: left;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
      }
    }

    tbody {
      tr {
        td {
          padding: ${({ theme: { spacing_m, spacing_s } }) =>
            `${spacing_m} ${spacing_s}`};

          text-align: left;

          background: #fff;
        }

        td {
          &:first-child {
            border-radius: ${({ theme: { spacing_s } }) =>
              `${spacing_s} 0 0 ${spacing_s}`};
          }

          &:last-child {
            border-radius: ${({ theme: { spacing_s } }) =>
              `0 ${spacing_s} ${spacing_s} 0`};
          }
        }
      }
    }
  }
`;

const TH = ({ children, ...rest }) => <th {...rest}>{children}</th>;
const TD = ({ children, ...rest }) => <td {...rest}>{children}</td>;

// -- exports
export const TableList = ({ headings = [], rows = [] }) => {
  const tableHeader =
    headings.length === 0 ? null : (
      <thead>
        <tr>
          {headings.map((heading, idx) => {
            return <TH key={idx}>{heading}</TH>;
          })}
        </tr>
      </thead>
    );

  const tableBody =
    rows.length === 0 ? null : (
      <tbody>
        {rows.map((row, idx) => {
          return (
            <tr key={idx}>
              {row.map((col, idx) => {
                return <TD key={idx}>{col}</TD>;
              })}
            </tr>
          );
        })}
      </tbody>
    );

  return (
    <StyledTableList>
      <table>
        {tableHeader}
        {tableBody}
      </table>
    </StyledTableList>
  );
};

TableList.TH = TH;
TableList.TD = TD;
