import { useHelper } from "@react-three/drei";
import { SpotLightProps } from "@react-three/fiber";
import { useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

export const SpotLightWHelper = ({
  isHelp,
  ...props
}: SpotLightProps & { isHelp: boolean }) => {
  const spotlightRef = useRef<SpotLight>(null!);

  if (isHelp) useHelper(spotlightRef, SpotLightHelper, "#ff0000");

  return <spotLight ref={spotlightRef} {...props} />;
};
