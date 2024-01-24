import { useFrame, useLoader } from "@react-three/fiber";
import { memo, useRef } from "react";
import { Group, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const MemoizedFlatGroup = memo(({ parent }: { parent: Group }) => {
  const flatGroup = (parent: Group): JSX.Element[] => {
    return parent.children.flatMap((child, index) => {
      if (child instanceof Mesh) {
        return (
          <mesh key={index} position={parent.position}>
            <primitive castShadow receiveShadow object={child} />
          </mesh>
        );
      } else if (child instanceof Group) {
        return flatGroup(child);
      }
      return <></>;
    });
  };

  return <>{flatGroup(parent)}</>;
});

export const ModelMesh = memo(({ path }: { path: string }) => {
  const groupRef = useRef<Group>(null);
  const model = useLoader(GLTFLoader, path);

  useFrame(() => {
    const { current } = groupRef;
    if (current) {
      const { rotation } = current;
      rotation.set(0, rotation.y + 0.001, 0);
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -24 * (Math.PI / 180), 0]}>
      {model.scene.children.map((child, index) => {
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
});
