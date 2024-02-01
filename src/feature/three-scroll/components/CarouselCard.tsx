import { Image, ImageProps } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BentPlaneGeometry } from "./OtherGeometry";
import {
  BufferGeometry,
  DoubleSide,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";
import { easing } from "maath";

export const CarouselCard = ({
  url,
  ...props
}: { url: string } & ImageProps) => {
  const cardRef =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  const [hovered, setHovered] = useState<boolean>(false);

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
  };
  const handlePointerOut = () => {
    setHovered(false);
  };

  useFrame((_, delta) => {
    if (cardRef.current) {
      easing.damp3(cardRef.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    }
  });

  return (
    <Image
      ref={cardRef}
      url={url}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      side={DoubleSide}
      {...props}
    >
      <BentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
};
