import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: #4661E6;
  color: #f2f4fe;
  width: 158px;
  height: 44px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #7C91F9;
  }
`;

const Button2 = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default Button2;
