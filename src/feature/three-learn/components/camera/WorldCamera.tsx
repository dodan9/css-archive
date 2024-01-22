import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useIsControl } from "../../store/threeStore";
import { useControls } from "leva";

export const WorldCamera = () => {
  const isControl = useIsControl();

  const controlSet = useControls("controlsetA", { enable: { value: true } });
  return (
    <>
      <OrthographicCamera
        makeDefault // makeDefault를 사용하여 이 카메라를 기본 카메라로 설정
        position={[10, 8, 10]} // 카메라의 위치
        zoom={100}
      />
      <OrbitControls enabled={controlSet.enable} target={[0, 1, 0]} />
    </>
  );
};
