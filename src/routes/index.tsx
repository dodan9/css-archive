import Home from "@src/feature/home/pages";
import Horizon from "@src/feature/horizon/pages";
import { Route, Routes } from "react-router";

export const appRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/horizon" element={<Horizon />} />
    </Routes>
  );
};
