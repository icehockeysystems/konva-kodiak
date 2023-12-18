import React from "react";
import { Stage, Image, Layer } from "react-konva";

export default function DrawingCanvas() {
  const svgContent = require("./IHS_bkg.png").default; // Import your SVG as a module
  return (
    <Stage width={600} height={400}>
      <Layer>
        <Image
          image={svgContent}
          x={0}
          y={0}
          width={600} // Match Stage width
          height={400} // Match Stage height
        />
      </Layer>
    </Stage>
  );
}
