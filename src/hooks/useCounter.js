import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = (n) => {
    setCount((count) => count + n);
  };

  const decrement = (n) => {
    setCount(() => {
      if (count > 0) {
        return count - n;
      }
      return count;
    });
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
