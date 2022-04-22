import React from "react";

function Square({ colorValue }) {
  return (
    <section className="guessColor" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "empty value"}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "empty color value"
}

export default Square;
