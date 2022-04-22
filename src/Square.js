import React from "react";

function Square({ colorValue, hexValue, isDarkText, setisDarkText }) {
  return (
    <section
      className="square"
      style={{ backgroundColor: colorValue, color: isDarkText ? "#000" : "#fff" }}
    >
      <p>{colorValue ? colorValue : "empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "empty color value",
};

export default Square;
