import { Link } from "react-router-dom";
import { NavBar } from "../styles";

const Nav = () => {
  return (
    <NavBar>
      <Link to={"/"}>home</Link>
      <Link to={"/horizon"}>horizon</Link>
      <Link to={"/interact"}>interact</Link>
      <Link to={"/scroll"}>scroll</Link>
      <Link to={"/scroll-flip"}>scroll-flip</Link>
      <Link to={"three"}>three</Link>
      <Link to={"three-scroll"}>three with scroll</Link>
    </NavBar>
  );
};

export default Nav;
