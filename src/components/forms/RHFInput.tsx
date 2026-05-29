import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import LabelForm from "../ui/LabelForm.tsx";
import InputForm from "../ui/InputForm.tsx";
import type { InputHTMLAttributes } from "react";

interface IInputProps<
  T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  labelRight?: string;
  message?: string;
}

const RHFInput = <T extends FieldValues>({
  control,
  label,
  labelRight,
  name,
  message,
  ...rest
}: Readonly<IInputProps<T>>) => {
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
      <span className="text-red-500 text-xs italic">{message}</span>
    </div>
  );
};

export default RHFInput;
