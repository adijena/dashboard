import { MdDashboard } from "react-icons/md";
import logo from "../assets/logo.png";
import { CiCalendar } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed w-16 md:w-56 h-screen bg-offWhite flex flex-col z-10 dark:bg-drkSec dark:text-drkBtn">
      <div className="flex items-center gap-2 m-2">
        <img src={logo} alt="logo" className="h-12 md:h-16" />
        <span className="font-semibold text-2xl mb-4 hidden md:block ">Brand</span>
      </div>
      <nav className="flex flex-col gap-6">
        <NavLink exact to="/" className="flex gap-2 ml-4 items-center"
        activeClassName="text-blue-500">
          <MdDashboard size={40} className="mt-1" />{" "}
          <span className="text-xl hidden md:block">Dashboard</span>
        </NavLink>
        <NavLink to="/products" className="flex gap-2 ml-4 items-center" >
          <GoListOrdered size={40} className="mt-1" />{" "}
          <span className="text-xl hidden md:block">Products</span>
        </NavLink>
        <NavLink to="/orders" className="flex gap-2 ml-4 items-center">
          <FaCartPlus size={40} className="mt-1" />{" "}
          <span className="text-xl hidden md:block">Orders</span>
        </NavLink>
        <NavLink to="/calender" className="flex gap-2 ml-4 items-center">
          <CiCalendar size={40} /> <span className="text-xl hidden md:block">Calender</span>
        </NavLink>
      </nav>
    </div>
  );
};
export default Sidebar;
