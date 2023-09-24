import React, { useState } from "react";
import ColorPalette from "./ColorPalette";

const Mandala = (props) => {
  const [fillColors, setFillColors] = useState(Array(1000).fill("white"));
  const [currentColor, setCurrentColor] = useState("black");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };

  return (
    <>
      <div className="mandala">
        <div className="image">
          <props.Image fillColors={fillColors} onFill={onFillColor} />
        </div>
        <ColorPalette
          currentColor={currentColor}
          changeColor={setCurrentColor}
        />
      </div>
    </>
  );
};
export default Mandala;
