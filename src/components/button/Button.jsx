import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
  border-style: none;
  margin-right: 20px;
  width: 90px;
  height: 35px;
  border-radius: 10px;
  font-family: Geneva, Verdana, sans-serif;
  :hover {
    color: white;
    background-image: linear-gradient(99deg, #d91027, #be0370);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;
