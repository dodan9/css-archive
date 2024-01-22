import Box from "@src/common/components/Box";

import InitCanvas from "../components/initCanvas";
import { Settings } from "../components/settings";

const ThreeLearn = () => {
  return (
    <Box style={{ height: "calc(100vh - 40px", border: "1px solid black" }}>
      <InitCanvas />
      <Settings />
    </Box>
  );
};

export default ThreeLearn;
