import Para from "../ui/Para.tsx";

import { NavLink } from "react-router";

const footerMenus = [
  {
    title: "Platform",
    subMenus: [
      { title: "Features", link: "/features" },
      { title: "Editorial", link: "/Editorial" },
      { title: "Enterprise", link: "/enterprise" },
    ],
  },
  {
    title: "Company",
    subMenus: [
      { title: "About Us", link: "/company/about" },
      { title: "Careers", link: "/company/careers" },
      { title: "Contact", link: "/company/contact" },
    ],
  },
  {
    title: "Legal",
    subMenus: [
      { title: "Privacy Policy", link: "/legal/privacy" },
      { title: "Terms of Service", link: "/legal/terms" },
      { title: "Cookie Policy", link: "/legal/cookie" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-tertiary px-4 py-10  md:px-10 md:justify-between lg:max-w-7xl lg:mx-auto">
      <div className="w-1/3  ">
        <div className="pb-2 ">
          <NavLink
            to="/"
            className="  cursor-pointer text-violet-800 font-playfair  text-3xl font-semibold hover:scale-105 transition-all duration-200 "
          >
            ModernCMS
          </NavLink>
        </div>
        <Para className="text-xs font-inter text-secondary md:max-w-5xl md:pr-6">
          Built for creators, by creators. The editorial system of the future.
          Empowering newsrooms with precision and speed.
        </Para>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {footerMenus.map((menu) => (
          <div key={menu.title}>
            <h3 className="font-semibold text-sm font-inter text-neutral mb-2">
              {menu.title}
            </h3>
            {menu.subMenus.map((subMenu) => (
              <NavLink
                key={subMenu.link}
                to={subMenu.link}
                className={({
                  isActive,
                }) => `flex flex-col mb-2 text-xs font-inter text-neutral hover:-translate-y-0.5 transition-all duration-75 hover:text-violet-400 focus:text-violet-600 underline-offset-4
                     ${
                       isActive
                         ? "text-violet-600 underline"
                         : "text-zinc-800 hover:text-violet-400"
                     }
                    `}
              >
                {subMenu.title}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
