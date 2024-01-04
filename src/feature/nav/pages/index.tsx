import { Link } from "react-router-dom";
import { NavBar } from "../styled/navStyle";

const Nav = () => {
  return (
    <NavBar>
      <Link to={"/"}>home</Link>
      <Link to={"/horizon"}>horizon</Link>
    </NavBar>
  );
};

export default Nav;
