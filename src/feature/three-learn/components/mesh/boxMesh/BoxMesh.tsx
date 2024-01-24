import { ThreeEvent } from "@react-three/fiber";
import { memo, useState } from "react";

export const BoxMesh = memo(() => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const clickedPosition = event.point;

    const { x, y, z } = clickedPosition;

    setIsClick(true);
    console.log(`down: [${x}, ${y}, ${z}]`);
  };

  const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const clickedPosition = event.point;

    const { x, y, z } = clickedPosition;

    setIsClick(false);
    console.log(`up: [${x}, ${y}, ${z}]`);
  };

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const clickedPosition = event.point;

    const { x, y, z } = clickedPosition;

    setIsHover(true);
    console.log(`over: [${x}, ${y}, ${z}]`);
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const clickedPosition = event.point;

    const { x, y, z } = clickedPosition;

    setIsHover(false);
    console.log(`out: [${x}, ${y}, ${z}]`);
    console.log(event.object);
  };

  return (
    <mesh
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
});
