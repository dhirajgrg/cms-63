import Para from "../../components/ui/Para.tsx";
import { NavLink, Outlet } from "react-router";

const DashboardMenu = [
  { title: "Dashboard", link: "/admin" },
  { title: "Content", link: "/admin/content" },
  { title: "Analytics", link: "/admin/analytics" },
  { title: "Users", link: "/admin/users" },
  { title: "Settings", link: "/admin/settings" },
];

const AdminLayout = () => {
  return (
    <div className="flex bg-orange-50 p-10 h-screen">
      <aside className="md:w-1/4 border-r-zinc-200 border-r-2  ">
        <h1 className="text-2xl font-semibold font-playfair text-neutral">Editoriol Studio</h1>
        <Para className="text-neutral font-inter text-sm">System Administratir</Para>
        <div className="flex flex-col gap-2 mt-4">
          {DashboardMenu.map((menu) => (
            <NavLink
              to={menu.link}
              key={menu.title}
              end={menu.link === "/admin"}
              className={({ isActive }) =>
                `hover:-translate-y-0.5 transition-all  duration-75 focus:underline underline-offset-4 text-neutral font-inter text-sm
                ${
                  isActive
                    ? "text-violet-600 bg-zinc-200 px-2 py-2 rounded mr-4 border-l-violet-600 border-l-4 underline transition-all duration-200"
                    : "text-zinc-800 hover:text-violet-400 px-2 py-2"
                }`
              }
            >
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
