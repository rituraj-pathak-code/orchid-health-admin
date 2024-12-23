import { SIDEBAR_ITEMS } from "@/lib/constants";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const location = useLocation();
  return (
    <div className="bg-sidebarbg w-[250px] min-h-[100vh] text-textPrimary font-poppins h-full sticky top-0">
      <div className="p-[14px] border-b border-r">
        <h2 className="font-bold text-xl text-center text-primary">
          Tele-Health
        </h2>
      </div>
      <div className="my-6 flex flex-col gap-[5px] text-sm">
        {SIDEBAR_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isSubMenuActive = item.subMenu?.some(
            (subItem) => subItem.navigation === location.pathname
          );
          const handleSubMenuToggle = () => {
            setOpenSubMenu((prev) => (prev === index ? null : index));
          };
          return item?.subMenu ? (
            <div key={item.title} className="mx-2">
              <button
                onClick={handleSubMenuToggle}
                className={`flex items-center justify-between p-2 text-sidebarbg2 rounded w-full ${
                  isSubMenuActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                <div className="flex items-center gap-[5px]">
                  <Icon size={19} />
                  <p>{item.title}</p>
                </div>
                {openSubMenu === index ? <FaAngleUp /> : <FaChevronDown />}
              </button>
              {/* SubMenu */}
              {openSubMenu === index && (
                <div className="pl-6">
                  {item.subMenu.map((subItem) => (
                    <NavLink
                      key={subItem.title}
                      to={subItem.navigation}
                      className={({ isActive }) =>
                        `flex items-center gap-[5px] p-2 text-sidebarbg2 ${
                          isActive
                            ? "text-primary"
                            : "hover:text-primary"
                        } rounded`
                      }
                    >
                      <GoDot />
                      <p>{subItem.title}</p>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to={item.navigation}
              className={({ isActive }) =>
                `flex items-center gap-[5px] p-2 mx-2 text-sidebarbg2 ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                } rounded`
              }
            >
              <Icon size={19} />
              <p>{item.title}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
