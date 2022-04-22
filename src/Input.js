import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="guessForm">
        <label>Add Color</label>
        <input
          autoFocus
          type="text"
          placeholder="add color"
          required
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
