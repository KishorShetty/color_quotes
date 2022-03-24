import { ColorPicker } from "@shopify/polaris";
import { useState } from "react";
import "./Color.css";

const Color = (props) => {
  const [color, setColor] = useState({
    hue: 0,
    brightness: 0.9375,
    saturation: 0.93125,
    alpha: 1,
  });
  // props.colorCode(`${color.alpha} ${color.brightness}`);
  props.colorCode(color);

  return (
    <>
      <br />
      <ColorPicker onChange={setColor} color={color} allowAlpha={true} />
      <br />
      {/* <span>
        color:{" "}
        {`hue: ${color.hue} brightness: ${color.brightness} saturation: ${color.saturation} alpha: ${color.alpha}`}
      </span> */}
    </>
  );
};

export default Color;
