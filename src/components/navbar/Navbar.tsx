
import Logo from "../ui/Logo.tsx";
import Menu from "../ui/Menu.tsx";
import Button from "../ui/Button.tsx";

const menus = [
  { title: "Platform", link: "/platform" },
  { title: "Features", link: "/features" },
  { title: "Editorial", link: "/editorial" },
  { title: "Enterprise", link: "/enterprise" },
];

const Navbar = () => {
  return (
    <div className="flex flex-col  bg-orange-50 shadow shadow-zinc-300 px-4 py-10  md:max-w-5xl md:mx-auto md:flex-row md:justify-between md:items-center md:py-4 md:px-6">
      <div className="w-28  hover:-translate-y-0.5 transition-all duration-75">
        <Logo src="https://placehold.co/50x50" />
      </div>
      <div className="flex flex-col justify-start items-start gap-4 mt-6  md:flex-row md:items-center md:gap-10 md:mt-0">
        {menus.map((menu) => (
          <Menu
            className="hover:-translate-y-0.5 transition-all duration-75 hover:text-violet-400 focus:text-violet-600 focus:underline underline-offset-4"
            key={menu.link}
            to={menu.link}
          >
            {menu.title}
          </Menu>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start gap-4 mt-4 md:flex-row md:items-center md:gap-6 md:mt-0">
        <Button className="  cursor-pointer bg-violet-800 hover:bg-violet-500 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-8 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 ">
          Login
        </Button>
       
      </div>
    </div>
  );
};

export default Navbar;
