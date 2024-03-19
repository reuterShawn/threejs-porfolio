import React, { useEffect } from "react";

import BirdScene from "../assets/3d/bird.glb";
import { useGLTF } from "@react-three/drei";

export function Bird() {
  const [scene, animations] = useGLTF(BirdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame((_, delta) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.25;

    // Check the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to foward and reset tje bird's rotation
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });
  return (
    <div>
      <mesh position={[-5, 3, 1]} scale={[0.0003, 0.003, 0.003]}>
        <primitive object={scene} />
      </mesh>
    </div>
  );
}

export default Bird;
