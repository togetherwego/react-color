import "./App.css";
import Input from "./Input";
import Square from "./Square";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setisDarkText] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText}/>
        <Input
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setisDarkText={setisDarkText}
        />
      </header>
    </div>
  );
}

export default App;
