import { useThree } from "@react-three/fiber";
import { memo } from "react";
import { DoubleSide, Texture } from "three";

export const TexturePlane = memo(({ texture }: { texture: Texture }) => {
  const { viewport } = useThree();

  return (
    <mesh rotation-x={-Math.PI / 2}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshStandardMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
});
