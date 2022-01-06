import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
`;

const TextP1 = ({ title }) => {
  return <P>{title}</P>;
};

export default TextP1;
