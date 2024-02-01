import { useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { MemoizedFlatGroup } from "@src/feature/three-learn/components/mesh/modelMesh/ModelMesh";
import { useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const AnimateModelMesh = ({ path }: { path: string }) => {
  const groupRef = useRef<Group>(null);

  const { scene, animations } = useLoader(GLTFLoader, path);
  const { actions, mixer } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions) {
      console.log(actions);
      actions.ballAction?.play();
      actions.ballAfterAction?.play();
      actions.floorHoleAction?.play();
    }
  }, [mixer]);

  return (
    <group ref={groupRef}>
      {scene.children.map((child, index) => {
        if (child instanceof Mesh) {
          return (
            <mesh key={index}>
              <primitive castShadow receiveShadow object={child} />
            </mesh>
          );
        } else if (child instanceof Group) {
          return <MemoizedFlatGroup key={index} parent={child} />;
        }
        return null;
      })}
    </group>
  );
};
