import { useEffect, useState } from "react";
import "./App.css";
import Color from "./components/input_color/Color";
import Input from "./components/input_color/Input";
import Png from "./components/png/Png";

function App() {
  const [inputText, setInputText] = useState();
  const [inputColor, setInputColor] = useState({});

  const getInputText = (text) => {
    setInputText(text);
  };

  const getColorCode = (color) => {
    setInputColor(color);
    // console.log(color);
  };

  return (
    <>
      <div className="App">
        Color Quote
        <Input input={getInputText} />
        {/* 100 chars long */}
        <Color colorCode={getColorCode} />
        <Png color={inputColor} input={inputText} />
      </div>
      {/* <span>text inside App: {inputText}</span> */}
      {/* {`hue: ${inputColor.hue} brightness: ${inputColor.brightness} saturation: ${inputColor.saturation} alpha: ${inputColor.alpha}`} */}
    </>
  );
}

export default App;
