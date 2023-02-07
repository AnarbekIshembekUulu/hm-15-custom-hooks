import React from "react";
import styled from "styled-components";
import { useTimer } from "../../hooks/useTimer";

const Timer = () => {
  const {
    inputOnChange,
    add,
    time,
    booleanState,
    start,
    stop,
    restart,
    timeInput,
  } = useTimer();
  return (
    <DivTimerStyle>
      <InputStyle
        value={timeInput}
        type="number"
        placeholder="Number..."
        onChange={(e) => inputOnChange(e.target.value)}
      />
      <ButtonStyleAdd onClick={add}>ADD</ButtonStyleAdd>
      <div>
        <StyleTime>{time || "00"}</StyleTime>
        {!booleanState ? (
          <ButtonStart onClick={start}>Start</ButtonStart>
        ) : (
          <ButtonStop onClick={stop}>Stop</ButtonStop>
        )}
        <ButtonRestart onClick={restart}>Restart</ButtonRestart>
      </div>
    </DivTimerStyle>
  );
};

export default Timer;

const InputStyle = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  background: none;
  margin-left: 5%;
  color: #ffffff;
  padding: 0 10px;
  outline: none;
  font-size: 1rem;
  color: antiquewhite;
  ::placeholder {
    color: #ffffff;
  }
`;

const DivTimerStyle = styled.div`
  margin-top: 60px;
  width: 800px;
  height: 200px;
  background-color: blueviolet;
  margin-left: 25.5%;
  border-radius: 20px;
  text-align: center;
  :hover {
    background-image: linear-gradient(99deg, #ffe000, #91c309);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const ButtonStart = styled.button`
  border-style: none;
  margin-right: 10px;
  border-radius: 15px;
  width: 80px;
  height: 40px;
  font-size: 1.2rem;
`;

const ButtonStop = styled.button`
  border-style: none;
  margin-right: 10px;
  border-radius: 15px;
  width: 80px;
  height: 40px;
  font-size: 1.2rem;
`;

const ButtonRestart = styled.button`
  border-style: none;
  margin-left: 20px;
  border-radius: 15px;
  width: 80px;
  height: 40px;
  color: #ffffff;
  font-size: 1.2rem;
  background-image: linear-gradient(99deg, #90213b, #ff4d00);
`;
const StyleTime = styled.h1`
  background-color: #0dff00;
  width: 50px;
  height: 40px;
  margin-left: 47.3%;
  border-radius: 250px;
  font-size: 1.5rem;
  padding-top: 6px;
  color: #776c5e;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonStyleAdd = styled.button`
  width: 50px;
  height: 35px;
  margin-left: 20px;
  border-style: none;
  border-radius: 20px;
  background-color: #10ff03;
  color: #150e0e;
  font-style: inherit;
  :hover {
    color: antiquewhite;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
