import React from "react";
interface ILabelFormProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

const LabelForm = ({ children, htmlFor,className }: ILabelFormProps) => {
  return <label htmlFor={htmlFor} className={className}>{children}</label>;
};

export default LabelForm;
