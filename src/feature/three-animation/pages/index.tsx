import { Canvas } from "@react-three/fiber";
import Box from "@src/common/components/Box";
import { AnimateModelMesh } from "../components/AnimateModelMesh";

import ball from "@src/assets/model/ball.glb";
import { OrbitControls } from "@react-three/drei";

const ThreeAnimation = () => {
  return (
    <Box style={{ height: "calc(100vh - 40px", border: "1px solid black" }}>
      <Canvas camera={{ position: [10, 10, 10] }} shadows>
        <ambientLight args={[0.4]} />
        <directionalLight
          color="white"
          position={[12, 20, 20]}
          intensity={0.7}
          castShadow
        />
        <directionalLight
          color="white"
          position={[20, 20, 2]}
          intensity={0.7}
          castShadow
        />

        <AnimateModelMesh path={ball} />

        <OrbitControls />
      </Canvas>
    </Box>
  );
};

export default ThreeAnimation;
