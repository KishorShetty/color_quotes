import "./App.css";
import Color from "./components/input_color/Color";
import Input from "./components/input_color/Input";
import Png from "./components/png/Png";

function App() {
  return (
    <div className="App">
      Hello App
      <Input />
      <Color />
      <Png />
    </div>
  );
}

export default App;
