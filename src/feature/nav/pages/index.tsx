import { Link } from "react-router-dom";
import { NavBar } from "../styled/navStyle";

const Nav = () => {
  return (
    <NavBar>
      <Link to={"/horizon"}>nav</Link>
    </NavBar>
  );
};

export default Nav;
