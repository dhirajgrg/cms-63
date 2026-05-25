import React from "react";
import { NavLink } from "react-router";

interface IMenuProps {
  className?: string;
  to?: string;
  children: React.ReactNode;
}

const Menu = ({ to = "", className, children }: IMenuProps) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default Menu;
