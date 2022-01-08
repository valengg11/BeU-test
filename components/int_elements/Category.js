import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${(props) => (props.active ? "#4661E6" : "#F2F4FE")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#4661E6")};
  width: fix-content;
  padding: 0 15px;
  height: 30px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #cfd7ff;
  }
`;

const Category = ({ text }) => {
  const [active, setActive] = useState(false);
  const action = () => {
    setActive(!active);
  };
  return (
    <Btn active={active} onClick={action}>
      {text}
    </Btn>
  );
};

export default Category;
