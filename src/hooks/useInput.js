import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlurEmail = () => {
    setError(value.includes("@"));
  };
  const add = () => {
    setValue("");
  };
  return {
    value,
    error,
    onChange,
    onBlurEmail,
    add,
  };
};
