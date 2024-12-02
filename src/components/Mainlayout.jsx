import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
