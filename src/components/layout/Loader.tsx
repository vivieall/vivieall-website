import React from "react";
import { Html } from "@react-three/drei";

const Loader: React.FC = () => {
  return (
    <Html center>
      <span className="canvas-loader" />
    </Html>
  );
};

export default Loader;
