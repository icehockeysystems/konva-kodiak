// src/components/DrawingCanvas.js

import React, { useState } from "react";
import { Stage, Layer, Line } from "react-konva";

const DrawingCanvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("black");
  const [points, setPoints] = useState([]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setPoints([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    setPoints((prevPoints) => [
      ...prevPoints,
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
    ]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    const newLine = new Line({
      points,
      stroke: color,
      strokeWidth: 5,
    });
    setPoints([]); // Clear points for next draw
    // Add new line to Konva layer
    // ...
  };

  return (
    <Stage width={600} height={400}>
      <Layer>
        {/* ... Add existing drawn lines here ... */}
        {isDrawing && (
          <Line
            points={points}
            stroke={color}
            strokeWidth={5}
            tension={0.5}
            // ... other line properties
          />
        )}
      </Layer>
    </Stage>
  );
};

export default DrawingCanvas;
