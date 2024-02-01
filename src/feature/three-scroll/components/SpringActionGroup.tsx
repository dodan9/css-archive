import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { Carousel } from "./Carousel";
import { easing } from "maath";

export const SpringActionGroup = () => {
  const groupRef = useRef<Group>(null);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -scroll.offset * (Math.PI * 2);
      if (state.events.update) state.events.update();

      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, 20],
        0.3,
        delta
      );

      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0.15]}>
      <Carousel />
    </group>
  );
};
