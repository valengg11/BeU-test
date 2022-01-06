import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
`;

const TextP1 = ({ title }) => {
  return <P>{title}</P>;
};

export default TextP1;
