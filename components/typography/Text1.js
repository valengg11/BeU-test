import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
`;

const Text1 = ({ text }) => {
  return <P>{text}</P>;
};

export default Text1;
