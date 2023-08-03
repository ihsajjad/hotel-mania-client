import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const options = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Book Now</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <Link to="/" className="text-[#8BCF17] text-xl font-bold">
          Hotel<span>Mania</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{options}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
