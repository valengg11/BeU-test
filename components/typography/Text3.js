import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
`;

const Text3 = ({ text }) => {
  return <P>{text}</P>;
};

export default Text3;
