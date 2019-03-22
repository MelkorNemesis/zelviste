import React from "react";
import PropTypes from "prop-types";

import { ButtonLink } from "../../atoms";

import "./Pagination.scss";

export function Pagination({ data }) {
  return (
    <div className="Pagination">
      {data.map((p, idx) => (
        <ButtonLink.Page
          key={idx}
          active={p.active}
          className="Pagination--button"
          to={p.url}
        >
          {idx + 1}
        </ButtonLink.Page>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      active: PropTypes.bool
    })
  ).isRequired
};
