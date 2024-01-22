import { useHelper } from "@react-three/drei";
import { DirectionalLightProps } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

export const DirectionLightWHelper = ({
  isHelp,
  ...props
}: DirectionalLightProps & { isHelp: boolean }) => {
  const directionReg = useRef<DirectionalLight>(null!);

  if (isHelp) useHelper(directionReg, DirectionalLightHelper, 1, "#ffff00");

  return <directionalLight ref={directionReg} {...props} />;
};
