"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const FlatExample = () => {
  const gltf = useLoader(GLTFLoader, "/assets/flat.glb");

  return (
    <Canvas resize={{ scroll: false, offsetSize: true }}>
      <ambientLight intensity={0.5} />

      <spotLight
        position={[0, 20, 0]}
        angle={0.15}
        penumbra={1}
        intensity={300}
      />
      <primitive object={gltf.scene} />
      <OrbitControls />
    </Canvas>
  );
};
