import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;

const TextP1 = ({ title }) => {
  return <P>{title}</P>;
};

export default TextP1;
