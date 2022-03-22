import { TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [value, setValue] = useState("your quote");

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  props.input(value);
  return (
    <>
    <br/><br/>
      <TextField
        label="Your Quote"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      <br />
      {/* <span>Name: {value}</span> */}
      <br />
    </>
  );
};

export default Input;
