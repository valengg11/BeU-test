import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: transparent;
  color: #647196;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    text-decoration: underline;
  }

  & i {
      margin-right: 12px;
      font-size; 12px;
      color: #4661E6;
  }
`;

const LightBackBtn = () => {
  return (
    <Btn>
      <i className="fas fa-chevron-left"></i>
      Go Back
    </Btn>
  );
};

export default LightBackBtn;
