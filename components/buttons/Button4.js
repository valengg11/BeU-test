import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: #D73737;
  color: #f2f4fe;
  width: 158px;
  height: 44px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #E98888;
  }
`;

const Button4 = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default Button4;
