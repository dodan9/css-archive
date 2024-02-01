import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpringActionGroup } from "../components/SpringActionGroup";
import Box from "@src/common/components/Box";

const ThreeScroll = () => {
  return (
    <Box style={{ height: "calc(100vh - 40px", border: "1px solid black" }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 15 }}>
        <fog attach="fog" args={["#a79", 8.5, 12]} />
        <ScrollControls pages={4} infinite>
          <SpringActionGroup />
        </ScrollControls>
        <Environment preset="dawn" background blur={0.5} />
      </Canvas>
    </Box>
  );
};

export default ThreeScroll;
