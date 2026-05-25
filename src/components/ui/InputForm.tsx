import React from "react";

type IInputFormProps = React.InputHTMLAttributes<HTMLInputElement>;
const InputForm = (props: IInputFormProps) => {
  return <input {...props} />;
};

export default InputForm;
