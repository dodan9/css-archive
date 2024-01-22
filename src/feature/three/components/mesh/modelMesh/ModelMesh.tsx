import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const ModelMesh = ({ path }: { path: string }) => {
  const model = useLoader(GLTFLoader, path);
  const meshRefs = useRef<(Mesh | null)[]>([]);

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child instanceof Mesh) {
        meshRefs.current.push(child);
      }
    });
  }, [model]);

  return (
    <group>
      {model.scene.children.map((child, index) => {
        if (child instanceof Mesh) {
          return (
            <mesh key={index}>
              <primitive castShadow receiveShadow object={child} />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
};
