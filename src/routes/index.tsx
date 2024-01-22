import Home from "@src/feature/home/pages";
import Horizon from "@src/feature/horizon/pages";
import Interact from "@src/feature/interact/pages";
import ScrollFlip from "@src/feature/scroll-flip/pages";
import Scroll from "@src/feature/scroll/pages";
import Three from "@src/feature/three/pages";
import { Route, Routes } from "react-router";

export const appRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/horizon" element={<Horizon />} />
      <Route path="/interact" element={<Interact />} />
      <Route path="/scroll" element={<Scroll />} />
      <Route path="/scroll-flip" element={<ScrollFlip />} />
      <Route path="/three" element={<Three />} />
    </Routes>
  );
};
