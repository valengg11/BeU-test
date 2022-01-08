import React, { useState } from "react";
import styled from "styled-components";
import Text1 from "../typography/Text1";
import TextP1 from "../typography/Text1";

const Dropdown = styled.div`
background: #373F68;
color: ${(props) => (props.isOpen ? "#E3E5EF" : "#F2F4FE")};
width: 194px;
height: 72px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 15px;
font-size: 14px;
font-weight: 400;
border-radius: 10px;

& i {
    font-size; 12px;
    color: #CDD2EE;
}

& span {
  font-weight: 700;
}
`;

const List = styled.div`
  background: #ffffff;
  color: #647196;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 255px;
  height: 192px;
  margin-top: 20px;
  border-radius: 10px;

  & p {
    width: 100%;
    margin: 0;

    &:hover {
      color: #ad1fea;
    }
  }

  & hr {
    border: none;
    border-top: 1px solid #BDC3D2;
    margin: 0;
  }

  & i {
    color: #ad1fea;
  }
`;

const ListItem = styled.div`
  display: flex;
  padding:  0 20px;
`;

const options = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

const SortDropDown = ({}) => {
  const [isOpen, setisOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {
    setisOpen(!isOpen);
  };
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <div>
      <Dropdown onClick={toggling} isOpen={isOpen}>
        <p>
          Sort by : <span>{selectedOption || "Most Upvotes"}</span>
        </p>
        {isOpen ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </Dropdown>
      {isOpen && (
        <List>
          <ListItem>
            <Text1 onClick={onOptionClicked(options[0])} text={options[0]} />
            <i className="fas fa-check"></i>
          </ListItem>
          <hr />
          <ListItem>
            <Text1 onClick={onOptionClicked(options[1])} text={options[1]} />
            <i className="fas fa-check"></i>
          </ListItem>
          <hr />
          <ListItem>
            <Text1 onClick={onOptionClicked(options[2])} text={options[2]} />
            <i className="fas fa-check"></i>
          </ListItem>
          <hr />
          <ListItem>
            <Text1 onClick={onOptionClicked(options[3])} text={options[3]} />
            <i className="fas fa-check"></i>
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default SortDropDown;
