import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.25px;
  font-weight: 700;
`;

const TitleH2 = ({ title }) => {
  return <H2>{title}</H2>;
};

export default TitleH2;
