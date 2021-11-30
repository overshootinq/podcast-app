import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact className="navbarroutes">
        Home
      </NavLink>
      <NavLink to="/Search" exact className="navbarroutes">
        Search
      </NavLink>
      <NavLink to="/Login" exact className="navbarroutes">
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;
