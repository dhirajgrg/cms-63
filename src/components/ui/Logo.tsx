import React from "react";

type ILogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Logo = ({ ...props }: ILogoProps) => {
  return <img {...props} />;
};

export default Logo;
