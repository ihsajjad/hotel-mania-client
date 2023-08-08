import { FaBars, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isUser = true;
  return (
    <div className="drawer lg:drawer-open bg-base-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="bg-[var(--main-color)] p-2 text-white rounded drawer-button lg:hidden absolute left-2 top-2"
        >
          <FaBars />
        </label>

        <Outlet />
      </div>

      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 md:w-80 w-[50vw] h-full bg-slate-300 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/book-now">Book Now</Link>
          </li>
          {isUser && (
            <>
              <li>
                <Link to="/dashboard/user/pending-bookings">
                  Pending Bookings
                </Link>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
