import { Controller } from "react-hook-form";
import LabelForm from "../ui/LabelForm.tsx";
import InputForm from "../ui/InputForm.tsx";

const RHFInput = ({ label, labelRight = "", name, control,message, ...rest }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {(label || labelRight) && (
        <LabelForm className="flex justify-between items-center text-sm text-neutral font-inter">
          <p>{label}</p>
          <p className="text-xs text-violet-800 hover:text-violet-500 cursor-pointer">
            {labelRight}
          </p>
        </LabelForm>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => <InputForm {...field} {...rest} />}
      />
      <span className="text-red-500 text-xs itallic">{message}</span>
    </div>
  );
};

export default RHFInput;
