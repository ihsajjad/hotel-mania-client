import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const options = (
    <>
      <li>
        {/* <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeItem" : "")}
        >
          Home
        </NavLink> */}
      </li>
      <li>
        <NavLink to="/" className="nav-item">
          Book Now
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="nav-item">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="nav-item">
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-700 text-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <Link to="/" className="text-[var(--main-color)] text-xl font-bold">
          Hotel<span>Mania</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* menu */}
        <ul className="space-x-4 menu-horizontal px-1">{options}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
