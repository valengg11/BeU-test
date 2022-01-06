import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: #3A4374;
  color: #f2f4fe;
  width: 158px;
  height: 44px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #656EA3;
  }
`;

const Button3 = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default Button3;
