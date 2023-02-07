import { useEffect, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState();
  const [timeInput, setTimeInput] = useState("");
  const [booleanState, setBooleanState] = useState(false);

  useEffect(() => {
    const clearTime = setInterval(() => {
      booleanState && setTime((time) => (time >= 1 ? time - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(clearTime);
    };
  }, [booleanState]);
  const inputOnChange = (value) => {
    setTimeInput(value);
  };

  const start = () => {
    setBooleanState(true);
  };
  const stop = () => {
    setBooleanState(false);
  };
  const restart = () => {
    setTime();
  };

  const inputValue = timeInput * 60;
  const add = () => {
    if ("enter") {
      setTime(inputValue);
      setTimeInput("");
    }
  };

  return {
    inputOnChange,
    add,
    booleanState,
    time,
    start,
    stop,
    restart,
    timeInput,
  };
};
