import React from "react";
import "./Box.css";

const Box = ({ id, width, height, color, removeBox }) => {
  return (
    <div
      id={ id }
      className="Box"
      data-testid={ `${width}-${height}-${color}` }
    >
      <div
        style={
          { width: `${width}px`, height: `${height}px`, backgroundColor: color }
        }
      >
      </div>
      <button className="Box-button" onClick={ removeBox }>X</button>
    </div>
  );
};

export default Box;