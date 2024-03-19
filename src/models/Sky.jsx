import React from "react";
import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";

export function Sky() {
  const sky = useGLTF();

  return;
  <mesh>
    <primitive object={sky.scene} />
  </mesh>;
}
