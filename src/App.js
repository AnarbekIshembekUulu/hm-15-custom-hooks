import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Timer from "./components/timer/Timer";
import { useCounter } from "./hooks/useCounter";
import styled from "styled-components";
function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <Counter>
        <>
          <CountStyle>Count:{count}</CountStyle>
          <Button onClick={() => decrement(2)}>Decrement</Button>
          <Button onClick={() => increment(4)}>Increment</Button>
          <Button onClick={reset}>reset</Button>
        </>
      </Counter>
      <InputHooks>
        <Input1>
          <Input />
        </Input1>
      </InputHooks>
      <Timer />
    </>
  );
}

export default App;

const CountStyle = styled.h1`
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: -20px;
  color: whitesmoke;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Counter = styled.div`
  width: 700px;
  height: 200px;
  margin-left: 29%;
  padding-top: 20px;
  margin-top: 100px;
  background-image: linear-gradient(90deg, #6f82e4, #1f2ebe);
  text-align: center;
  border-radius: 20px;
  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

const InputHooks = styled.div`
  padding-top: 20px;
  text-align: center;
  margin-left: 22.5%;
  margin-top: 80px;
  border-radius: 20px;
  width: 900px;
  height: 200px;
  background-image: linear-gradient(90deg, #0052d4, #4364f7, #6fb1fc);
`;

const Input1 = styled.div`
  margin-left: -320px;
  margin-bottom: 20px;
`;
