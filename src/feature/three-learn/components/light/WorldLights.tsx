import { DirectionLightWHelper, SpotLightWHelper } from "./LightWHelper";

export const WorldLight = () => {
  return (
    <>
      <ambientLight intensity={0.9} />

      <DirectionLightWHelper
        color="white"
        position={[2, 10, 10]}
        intensity={0.7}
      />
      <DirectionLightWHelper
        color="white"
        position={[10, 10, 2]}
        intensity={0.7}
      />

      <SpotLightWHelper
        position={[-5.07926 * 2, 2.76 * 2, -4.3627]}
        angle={0.2}
        penumbra={0.6}
        decay={0.1}
        intensity={Math.PI}
        castShadow
      />
    </>
  );
};
