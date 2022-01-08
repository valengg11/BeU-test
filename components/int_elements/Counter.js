import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${(props) => (props.active ? "#4661E6" : "#F2F4FE")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#3A4374")};
  width: 40px;
  height: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #CFD7FF;
  }

  & i {
    margin-bottom: 7px;
    font-size; 8px;
    color: ${(props) => (props.active ? "#FFFFFF" : "#4661E6")};
     
  }
`;

const Counter = ({ number }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(number);
  const action = () => {
    setValue(parseInt(number) + 1);
    setActive(true);
  };
  return (
    <Btn active={active} onClick={action}>
      <i className="fas fa-chevron-up"></i>
      {value}
    </Btn>
  );
};

export default Counter;
