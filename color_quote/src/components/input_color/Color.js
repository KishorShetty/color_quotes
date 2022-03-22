import { ColorPicker } from "@shopify/polaris";
import { useState } from "react";
import "./Color.css";

const Color = (props) => {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  // props.colorCode(`${color.alpha} ${color.brightness}`);
  props.colorCode(color);

  return (
    <>
      <br />
      <ColorPicker onChange={setColor} color={color} allowAlpha />
      <br />
      <span>
        color:{" "}
        {`hue: ${color.hue} brightness: ${color.brightness} saturation: ${color.saturation} alpha: ${color.alpha}`}
      </span>
    </>
  );
};

export default Color;
