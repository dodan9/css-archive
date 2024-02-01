import { Canvas } from "@react-three/fiber";
import { ModelMesh } from "../mesh/modelMesh/ModelMesh";
import { ChangeEvent, Suspense, useState } from "react";
import { WorldBackground } from "../background/WorldBackground";
import { WorldLight } from "../light/WorldLights";
import { PresentationControls } from "@react-three/drei";
import room from "@src/assets/model/room.glb";
import { WorldCamera } from "../camera/WorldCamera";
import { TexturePlane } from "../mesh/planeMesh/TexturePlane";
import { Texture, TextureLoader } from "three";
import { BoxMesh } from "../mesh/boxMesh/BoxMesh";

const InitCanvas = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    setImage(file);
  };
  const convertTexture = (image: File) => {
    const loader = new TextureLoader();
    const newTexture = loader.load(URL.createObjectURL(image));
    return newTexture;
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleChangeImage} />
      <Canvas shadows>
        <WorldCamera />
        <WorldBackground />
        <WorldLight />

        {image && (
          <>
            <TexturePlane texture={convertTexture(image)} />
          </>
        )}

        {/* <BoxMesh /> */}
        {/* <Suspense fallback={null}>
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
      </Suspense> */}
      </Canvas>
    </>
  );
};

export default InitCanvas;
