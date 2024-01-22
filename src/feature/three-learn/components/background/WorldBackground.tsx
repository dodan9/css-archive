import { useIsGuide } from "../../store/threeStore";

export const WorldBackground = () => {
  const isGuide = useIsGuide();

  return (
    <>
      {isGuide && (
        <>
          <gridHelper args={[20, 20]} />
          <axesHelper args={[10]} />
        </>
      )}
      <color args={["#4b4b4b"]} attach="background" />
      {/* <Environment preset="night" background blur={0.5} /> */}
    </>
  );
};
