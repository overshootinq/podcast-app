import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/" exact className="nav-bar-route-button">
        Home
      </NavLink>
      <NavLink to="/Search" exact className="nav-bar-route-button">
        Search
      </NavLink>
      <NavLink to="/Login" exact className="nav-bar-route-button">
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;
