import { useControls } from "leva";

export const WorldBackground = () => {
  const guideSet = useControls("Guide", {
    grid: { value: true },
    axes: { value: true },
  });
  return (
    <>
      {guideSet.grid && <gridHelper args={[100, 100]} />}
      {guideSet.axes && <axesHelper args={[100]} />}
      <color args={["#4b4b4b"]} attach="background" />
      {/* <Environment preset="night" background blur={0.5} /> */}
    </>
  );
};
