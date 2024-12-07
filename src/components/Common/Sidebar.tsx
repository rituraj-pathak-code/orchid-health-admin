import { Link, NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-sidebarbg w-[250px] min-h-[100vh] text-white">
      <div className="p-4">
        <h2 className="font-bold text-2xl text-center">Tele-Health</h2>
      </div>
      <div className="my-6 flex flex-col gap-[5px] text-sm">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            `flex items-center gap-[5px] p-2 mx-2 text-sidebarbg2 ${
              isActive ? "text-white" : "hover:text-white"
            } rounded`
          }
        >
          <LuLayoutDashboard size={19} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={"/admin/users"}
          className={({ isActive }) =>
            `flex items-center gap-[5px] p-2 mx-2 text-sidebarbg2 ${
              isActive ? "text-white" : "hover:text-white"
            } rounded`
          }
        >
          <IoCreateOutline size={20} />
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
