import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

export function Plane({ isRotating, ...props }) {
  const { scene, animations } = useGLTF(planeScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take  001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
