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
  className: string;
  options: SelectOptions[];
}

const Select = <T extends FieldValues>({
  control,
  name,
  options,
  ...rest
}: Readonly<ISelectProps<T>>) => {
  return (
    <div >
      <LabelForm htmlFor="tags">Select a category : </LabelForm>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select id={name} {...field} {...rest} >
            {options.map((item) => (
              <option
                key={item.title}
                value={item.value}
            
              >
                {item.title}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default Select;
