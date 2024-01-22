import { OrbitControls } from "@react-three/drei";

export const WorldBackground = () => {
  return (
    <>
      <gridHelper args={[20, 20]} />
      <axesHelper args={[10]} />
      <OrbitControls />
      <color args={["#4b4b4b"]} attach="background" />
      {/* <Environment preset="night" background blur={0.5} /> */}
    </>
  );
};
