import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useControls } from "leva";

export const WorldCamera = () => {
  const controlSet = useControls("isControl", { enable: { value: true } });
  return (
    <>
      <OrthographicCamera
        makeDefault // makeDefault를 사용하여 이 카메라를 기본 카메라로 설정
        position={[100, 100, 100]} // 카메라의 위치
        zoom={100}
      />
      <OrbitControls
        enabled={controlSet.enable}
        target={[0, 1, 0]}
        minZoom={20}
        minPolarAngle={-Math.PI}
      />
    </>
  );
};
