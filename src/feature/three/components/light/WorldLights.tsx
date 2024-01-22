import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { SpotLightWHelper } from "./SpotLightWHelper";
import { DirectionLightWHelper } from "./DirectionLightWHelper";

export const WorldLight = () => {
  const dirlightRef = useRef<DirectionalLight>(null!);

  useHelper(dirlightRef, DirectionalLightHelper, 1, "#ff0000");

  return (
    <>
      <ambientLight intensity={0.4} />

      <DirectionLightWHelper
        color="white"
        position={[2, 10, 10]}
        isHelp={true}
      />
      <DirectionLightWHelper
        color="white"
        position={[10, 10, 2]}
        isHelp={true}
      />

      <SpotLightWHelper
        position={[-5.07926 * 2, 2.76 * 2, -4.3627]}
        angle={0.2}
        penumbra={0.6}
        decay={0.1}
        intensity={Math.PI}
        castShadow
        isHelp={true}
      />
    </>
  );
};
