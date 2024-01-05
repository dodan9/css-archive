import { Link } from "react-router-dom";
import { NavBar } from "../styled/navStyle";

const Nav = () => {
  return (
    <NavBar>
      <Link to={"/"}>home</Link>
      <Link to={"/horizon"}>horizon</Link>
      <Link to={"/interact"}>interact</Link>
    </NavBar>
  );
};

export default Nav;
