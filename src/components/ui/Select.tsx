import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import LabelForm from "./LabelForm.tsx";
import type { SelectHTMLAttributes } from "react";

type SelectOptions = {
  title: string;
  value: string;
};

interface ISelectProps<
  T extends FieldValues,
> extends SelectHTMLAttributes<HTMLSelectElement> {
  control: Control<T>;
  name: Path<T>;
  message?: string;
  className: string;
  options: SelectOptions[];
}

const Select = <T extends FieldValues>({
  control,
  name,
  message,
  options,
  ...rest
}: Readonly<ISelectProps<T>>) => {
  return (
    <div className="flex items-center">
      <LabelForm className="w-1/3 ">
        <p>
          Select Category :<sup className="text-red-600">*</sup>
        </p>
      </LabelForm>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select id={name} {...field} {...rest}>
            {options.map((item) => (
              <option key={item.title} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        )}
      />
      <span className="text-red-500 text-xs italic capitalize ml-2">
        {message}
      </span>
    </div>
  );
};

export default Select;
