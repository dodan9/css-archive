import { Canvas } from "@react-three/fiber";
import { ModelMesh } from "../mesh/modelMesh/ModelMesh";
import { Suspense } from "react";
import { WorldBackground } from "../background/WorldBackground";
import { WorldLight } from "../light/WorldLights";
import { PresentationControls } from "@react-three/drei";

import room from "@src/assets/model/room.glb";
import { WorldCamera } from "../camera/WorldCamera";

const InitCanvas = () => {
  return (
    <Canvas shadows>
      <WorldCamera />
      <WorldBackground />
      <WorldLight />

      <Suspense fallback={null}>
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, 0]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        >
          <ModelMesh path={room} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default InitCanvas;
