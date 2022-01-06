import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: #373F68;
  color: #FFFFFF;
  width: 158px;
  height: 53px;
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
      color: #CDD2EE;
  }
`;

const DarkBackBtn = () => {
  return (
    <Btn>
      <i className="fas fa-chevron-left"></i>
      Go Back
    </Btn>
  );
};

export default DarkBackBtn;
