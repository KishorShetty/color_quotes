import { TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [value, setValue] = useState("Jaded Pixel");

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  props.input(value);
  return (
    <>
      <TextField
        label="Store name"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      <br />
      <span>Name: {value}</span>
      <br />
    </>
  );
};

export default Input;
