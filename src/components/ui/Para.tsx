import React from "react";

interface IParaProps {
  className?: string;
  children: React.ReactNode;
}

function Para({ className, children }: IParaProps) {
  return <p className={className}>{children}</p>;
}

export default Para;
