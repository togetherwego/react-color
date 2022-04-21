import React from "react";

function GuessColor() {
  return (
    <>
      <div className="guessColor">GuessColor</div>
      <form className="guessForm">
        <label>Guess Color</label>
        <input
          id="guess"
          type="text"
          role="searchBox"
          placeholder="guess color"
        />
      </form>
    </>
  );
}

export default GuessColor;
