import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select``;

export const Select = ({ className, options, value, prompt, ...rest }) => {
  return (
    <StyledSelect className={className} defaultValue={value} {...rest}>
      {prompt && <option disabled>{prompt}</option>}
      {options.map(opt => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </StyledSelect>
  );
};
