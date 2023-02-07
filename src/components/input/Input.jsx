import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const Input = () => {
  const { onBlurEmail, onChange, value, error, add } = useInput();
  return (
    <>
      {!error && <FormInfo>Заполните форму</FormInfo>}
      {error && <FormInfo>Правильно!!!</FormInfo>}
      <InputStyle
        onChange={onChange}
        onBlur={onBlurEmail}
        type="email"
        value={value}
        placeholder={"Enter..."}
      />
      <ButtonAddStyle onClick={add}>ADD</ButtonAddStyle>
    </>
  );
};

export default Input;

const InputStyle = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  background: none;
  margin-left: 35%;
  color: #ffffff;
  padding: 0 10px;
  outline: none;
  font-size: 1.5rem;
  color: antiquewhite;
  ::placeholder {
    color: #ffffff;
  }
`;
const FormInfo = styled.p`
  font-size: 1.4rem;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 1px;
  color: antiquewhite;
  margin-left: 250px;
`;

const ButtonAddStyle = styled.button`
  background-color: red;
  color: antiquewhite;
  border-style: none;
  width: 50px;
  height: 30px;
  margin-left: 20px;
  border-radius: 20px;
  :hover {
    background-color: #fff200;
    color: black;
    border-radius: 10px;
  }
`;
