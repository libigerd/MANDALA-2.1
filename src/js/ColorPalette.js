import React from "react";

export default function ColorPalette(props) {
  const colors = [
    { id: 0, value: "rgba(255, 219, 135, 0.975)" },
    { id: 1, value: "rgba(255, 129, 158, 1.0)" },
    { id: 2, value: "rgba(0, 195, 51, 1.0)" },
    { id: 3, value: "rgba(0, 187, 196, 1.0)" },
    { id: 4, value: "rgba(125, 167, 255, 1.0)" },
    { id: 5, value: "rgba(182, 151, 255, 1.0)" },
    { id: 6, value: "rgba(168, 133, 116, 1.0)" },
    { id: 7, value: "rgba(0, 0, 0, 0.82)"},
  ];

  return (
    <div className="color-palette">
      {colors.map((color) => {
        const activeClass =
          props.currentColor === color.value ? "color-swatch-active" : "";
        return (
          <div
            onClick={() => {
              props.changeColor(color.value);
            }}
          >
            <div
              className={`color-swatch ${activeClass}`}
              style={{ backgroundColor: color.value }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
