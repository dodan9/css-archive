import { Canvas } from "@react-three/fiber";
import Box from "@src/common/components/Box";
import { ModelMesh } from "../components/mesh/modelMesh/ModelMesh";
import { Suspense } from "react";
import { WorldBackground } from "../components/background/WorldBackground";
import { WorldLight } from "../components/light/WorldLights";
import { OrthographicCamera } from "@react-three/drei";

import room from "@src/assets/model/room.glb";

const Three = () => {
  return (
    <Box style={{ height: "calc(100vh - 40px", border: "1px solid black" }}>
      <Canvas shadows>
        <OrthographicCamera makeDefault position={[10, 10, 10]} zoom={40} />
        <WorldBackground />
        <WorldLight />

        <Suspense fallback={null}>
          <ModelMesh path={room} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Three;
