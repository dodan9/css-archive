import { useHelper } from "@react-three/drei";
import { DirectionalLightProps, SpotLightProps } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useRef } from "react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  SpotLight,
  SpotLightHelper,
} from "three";

export const DirectionLightWHelper = (props: DirectionalLightProps) => {
  const directionRef = useRef<DirectionalLight>(null!);

  const lightSet = useControls("LightHelper", {
    direction: folder({ isHelp: { value: true }, color: { value: "#ffff00" } }),
  });

  useHelper(
    lightSet.isHelp ? directionRef : null,
    DirectionalLightHelper,
    1,
    lightSet.color
  );

  return <directionalLight ref={directionRef} {...props} />;
};

export const SpotLightWHelper = (props: SpotLightProps) => {
  const spotlightRef = useRef<SpotLight>(null!);

  const lightSet = useControls("LightHelper", {
    spot: folder({ isHelp: { value: true }, color: { value: "#ff0000" } }),
  });

  useHelper(
    lightSet.isHelp ? spotlightRef : null,
    SpotLightHelper,
    lightSet.color
  );

  return <spotLight ref={spotlightRef} {...props} />;
};
