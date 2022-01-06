import React from "react";
import styled from "styled-components";

const H4 = styled.h4`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-weight: 700;
`;

const TitleH4 = ({ title }) => {
  return <H4>{title}</H4>;
};

export default TitleH4;
