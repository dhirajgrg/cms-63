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
  message?: string;
}

const RHFInput = <T extends FieldValues>({
  control,
  label,
  name,
  message,
  ...rest
}: Readonly<IInputProps<T>>) => {
  return (
    <div className="flex flex-col md:flex-row  md:items-center">
      <LabelForm className="w-full  md:w-1/3 text-sm text-neutral font-inter capitalize">
        <p>{label}<sup className="text-red-600">*</sup></p>
      </LabelForm>

      <Controller
        control={control}
        name={name}
        render={({ field }) => <InputForm {...field} {...rest} />}
      />
      <span className="text-red-500 text-xs italic capitalize ml-2">{message}</span>
    </div>
  );
};

export default RHFInput;
