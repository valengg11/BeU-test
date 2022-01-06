import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.33px;
  font-weight: 700;
`;

const TitleH1 = ({ title }) => {
  return <H1>{title}</H1>;
};

export default TitleH1;
