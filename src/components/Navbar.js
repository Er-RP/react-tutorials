import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? "violet" : "grey" };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => {
          return isActive ? "active2" : "link";
        }}
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
