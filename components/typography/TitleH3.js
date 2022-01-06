import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  font-weight: 700;
`;

const TitleH3 = ({ title }) => {
  return <H3>{title}</H3>;
};

export default TitleH3;
