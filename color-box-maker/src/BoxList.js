import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (width, height, color) => {
    setBoxes(() => [...boxes, { id: uuid(), width, height, color }]);
  };

  const removeBox = (event) => {
    const { id } = event.target.parentElement;
    setBoxes(() => boxes.filter(box => box.id !== id));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={ addBox } />
      {
        boxes.map(box => (
          <Box
            id={ box.id }
            key={ box.id }
            width={ box.width }
            height={ box.height }
            color={ box.color }
            removeBox={ event => removeBox(event) }
          />
        ))
      }
    </div>
  );
};

export default BoxList;