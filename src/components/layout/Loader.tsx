import React from "react";
import { Html, useProgress } from "@react-three/drei";

// Loader component to show the loading progress
const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;