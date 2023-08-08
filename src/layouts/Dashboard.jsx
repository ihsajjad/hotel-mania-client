import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-base-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="bg-[var(--main-color)] p-2 text-white rounded drawer-button lg:hidden absolute left-2 top-2"
        >
          <FaBars />
        </label>
      </div>

      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 md:w-80 w-[50vw] h-full bg-slate-300 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
