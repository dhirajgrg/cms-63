import Logo from "../ui/Logo.tsx";
import Para from "../ui/Para.tsx";

import { NavLink } from "react-router";

const footerMenus = [
  {
    title: "Platform",
    link: "/platform",
    subMenus: [
      { title: "Features", link: "/features" },
      { title: "Editorial", link: "/Editorial" },
      { title: "Enterprise", link: "/enterprise" },
    ],
  },
  {
    title: "Company",
    link: "/company",
    subMenus: [
      { title: "About Us", link: "/company/about" },
      { title: "Careers", link: "/company/careers" },
      { title: "Contact", link: "/company/contact" },
    ],
  },
  {
    title: "Legal",
    link: "/legal",
    subMenus: [
      { title: "Privacy Policy", link: "/legal/privacy" },
      { title: "Terms of Service", link: "/legal/terms" },
      { title: "Cookie Policy", link: "/legal/cookie" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-orange-50 shadow shadow-zinc-300 px-4 py-10  md:max-w-5xl md:mx-auto md:px-6 md:justify-between">
      <div className="w-1/3  ">
        <Logo src="https://placehold.co/50x50" className="pb-4" />
        <Para>
          Built for creators, by creators. The editorial system of the future.
          Empowering newsrooms with precision and speed.
        </Para>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {footerMenus.map((menu) => (
          <div key={menu.link}>
            <h3 className="font-semibold text-lg mb-2">{menu.title}</h3>
            <ul>
              {menu.subMenus.map((subMenu) => (
                <NavLink
                  key={subMenu.link}
                  to={subMenu.link}
                  className={({
                    isActive,
                  }) => `flex flex-col mb-1 hover:-translate-y-0.5 transition-all duration-75 hover:text-violet-400 focus:text-violet-600 underline-offset-4
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
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
