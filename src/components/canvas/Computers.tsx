import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.9}
        position={isMobile ? [0, -3, -2.2] : [0, -1.9, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return isMobile ? null : (
    <div className="absolute bottom-0 left-0 z-0 h-[55vh] w-full overflow-visible">
      <div
        className="h-full w-full cursor-zoom-in transition-transform duration-700 ease-out hover:scale-[1.12] group-hover/hero:scale-[1.12]"
        style={{ transformOrigin: "50% 38%", willChange: "transform" }}
      >
      <Canvas
        className="h-full w-full"
        style={{ background: "transparent" }}
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x050816, 1);
        }}
      >
        <color attach="background" args={["#050816"]} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
      </div>
    </div>
  );
};

export default ComputersCanvas;
