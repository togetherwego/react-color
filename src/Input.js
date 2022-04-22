import React from "react";
import colorNames from 'colornames'

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setisDarkText,
}) => {
  return (
      <form onSubmit={(e) => e.preventDefault()} className="guessForm">
        <label>Add Color</label>
        <input
          autoFocus
          type="text"
          placeholder="add color"
          required
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
        <button type="button" onClick={() => setisDarkText(!isDarkText)}> Toogle text color</button>
      </form>
  );
};

export default Input;
