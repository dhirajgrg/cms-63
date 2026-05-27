import Logo from "../ui/Logo.tsx";
import Button from "../ui/Button.tsx";
import { NavLink } from "react-router";

const menus = [
  { title: "Home", link: "/" },
  { title: "Platform", link: "/platform" },
  { title: "Features", link: "/features" },
  { title: "Editorial", link: "/editorial" },
  { title: "Enterprise", link: "/enterprise" },
];

const Navbar = () => {
  return (
    <div className="flex flex-col  bg-orange-50 shadow shadow-zinc-300 px-4 py-10  md:max-w-5xl md:mx-auto md:flex-row md:justify-between md:items-center md:py-4 md:px-6">
      <div className="w-28  hover:-translate-y-0.5 transition-all duration-75">
        <NavLink to="/">
          <Logo src="https://placehold.co/50x50" />
        </NavLink>
      </div>
      <div className="flex flex-col justify-start items-start gap-4 mt-6  md:flex-row md:items-center md:gap-10 md:mt-0">
        {menus.map((menu) => (
          <NavLink
            className={({ isActive }) =>
              `hover:-translate-y-0.5 transition-all duration-75 focus:underline underline-offset-4 ${
                isActive
                  ? "text-violet-600 underline"
                  : "text-zinc-800 hover:text-violet-400"
              }`
            }

            key={menu.link}
            to={menu.link}
          >
            {menu.title}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start gap-4 mt-4 md:flex-row md:items-center md:gap-6 md:mt-0">
        <NavLink to="/login">
          <Button className="  cursor-pointer bg-violet-800 hover:bg-violet-500 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-8 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 ">
            Login
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
