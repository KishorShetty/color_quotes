import { ColorPicker } from "@shopify/polaris";
import { useState } from "react";
import "./Input.css";

function Input() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  return <ColorPicker onChange={setColor} color={color} allowAlpha />;
}

export default Input;
