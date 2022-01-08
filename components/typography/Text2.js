import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;

const Text2 = ({ text }) => {
  return <P>{text}</P>;
};

export default Text2;
