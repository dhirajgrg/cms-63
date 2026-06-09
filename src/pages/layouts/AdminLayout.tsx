import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router";
import { AiFillDashboard } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaUsers } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { PiTreeStructureFill } from "react-icons/pi";

import useUser from "../../lib/hooks/useUser.tsx";
import Para from "../../components/ui/Para.tsx";

interface IDashboardMenus {
  title: string;
  link: string;
  icon: ReactNode;
  subMenus?: Array<{
    title: string;
    link: string;
    icon: ReactNode;
  }> | null;
}

const DashboardMenu: Array<IDashboardMenus> = [
  { title: "Dashboard", link: "/admin", icon: <AiFillDashboard /> },
  { title: "Content", link: "/admin/content", icon: <PiTreeStructureFill /> },
  { title: "Analytics", link: "/admin/analytics", icon: <DiGoogleAnalytics /> },
  { title: "Users", link: "/admin/users", icon: <FaUsers /> },
  { title: "Settings", link: "/admin/settings", icon: <IoSettings /> },
];

const AdminLayout = () => {
  const { loggedInUser } = useUser();
  return (
    <div className="relative flex bg-orange-50 p-10 h-screen">
      <div className="flex flex-col items-center justify-center text-right absolute right-6 top-4">
        <p className="text-xs font-inter font-semibold">
          {loggedInUser?.firstName}
        </p>
      </div>

      <aside className="w-full md:w-1/4 border-r-zinc-200 border-r-2  ">
        <h1 className="text-2xl font-semibold font-playfair text-neutral">
          Editoriol Studio
        </h1>
        <Para className="text-neutral font-inter text-sm">
          System Administratir
        </Para>
        <div className="flex flex-col gap-2 mt-4">
          {DashboardMenu &&
            DashboardMenu.map((menu) => (
              <NavLink
                to={menu.link}
                key={menu.title}
                end={menu.link === "/admin"}
                className={({ isActive }) =>
                  ` flex items-center gap-2 hover:-translate-y-0.5 transition-all  duration-75 focus:underline underline-offset-4 text-neutral font-inter text-sm
                ${
                  isActive
                    ? "text-violet-600 bg-zinc-200 px-2 py-2 rounded mr-4 border-l-violet-600 border-l-4 underline transition-all duration-200"
                    : "text-zinc-800 hover:text-violet-400 px-2 py-2"
                }`
                }
              >
                {menu.icon}
                {menu.title}
              </NavLink>
            ))}
        </div>
      </aside>

      <section className="w-full p-10">
        <Outlet />
      </section>
    </div>
  );
};

export default AdminLayout;
