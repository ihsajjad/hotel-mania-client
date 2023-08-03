import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";

const Mian = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Mian;
