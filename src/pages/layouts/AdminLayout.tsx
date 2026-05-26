import Para from "../../components/ui/Para.tsx";
import Menu from "../../components/ui/Menu.tsx";
import { Outlet } from "react-router";

const DashboardMenu = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Content", link: "/admin/content" },
  { title: "Analytics", link: "/admin/analytics" },
  { title: "Users", link: "/admin/users" },
  { title: "Settings", link: "/admin/settings" },
];

const AdminLayout = () => {
  return (
    <div className="flex bg-orange-50 p-10 h-screen">
      <aside className="md:w-1/3 border-r-zinc-200 border-r ">
        <h1 className="text-2xl font-semibold">Editoriol Studio</h1>
        <Para>System Administratir</Para>
        <div className="flex flex-col gap-2 mt-4">
          {DashboardMenu.map((menu) => (
            <Menu
              to={menu.link}
              key={menu.title}
              className="mr-2 font-medium text-zinc-700 hover:text-violet-500 transition-colors duration-200 text-sm  hover:bg-zinc-200  focus:bg-zinc-200  focus:border-l-2 focus:border-l-violet-500 focus:text-violet-600 py-2 px-4 "
            >
              {menu.title}
            </Menu>
          ))}
        </div>
      </aside>
      <section className="w-2/3 p-10">
        <Outlet />
      </section>
    </div>
  );
};

export default AdminLayout;
