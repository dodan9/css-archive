import { useHelper } from "@react-three/drei";
import { DirectionalLightProps, SpotLightProps } from "@react-three/fiber";
import { useRef } from "react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  SpotLight,
  SpotLightHelper,
} from "three";
import { useIsHelper } from "../../store/threeStore";

export const DirectionLightWHelper = (props: DirectionalLightProps) => {
  const directionRef = useRef<DirectionalLight>(null!);
  const isHelper = useIsHelper();

  useHelper(directionRef, DirectionalLightHelper, 1, "#ffff00");

  return <directionalLight ref={directionRef} {...props} />;
};

export const SpotLightWHelper = (props: SpotLightProps) => {
  const spotlightRef = useRef<SpotLight>(null!);
  const isHelper = useIsHelper();
  useHelper(spotlightRef, SpotLightHelper, "#ff0000");

  return <spotLight ref={spotlightRef} {...props} />;
};
