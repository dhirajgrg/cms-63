import { type ComponentProps } from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

import LabelForm from "../ui/LabelForm.tsx";

interface IFileInputProps<
  T extends FieldValues,
> extends ComponentProps<"input"> {
  control: Control<T>;
  name: Path<T>;
  multiple?: boolean;
  message?: string;
  label: string;
}

function RHFFileInput<T extends FieldValues>({
  control,
  name,
  multiple,
  message,
  label,
  ...rest
}: Readonly<IFileInputProps<T>>) {
  return (
    <div className="flex items-center">
      <LabelForm className="w-1/3 flex justify-between items-center text-sm text-neutral font-inter capitalize">
        <p>
          {label}
          <sup className="text-red-600">*</sup>
        </p>
      </LabelForm>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            name={field.name}
            type="file"
            multiple={multiple}
            onChange={(e) => {
              const files = e.target.files;
              if (!files) return;
              field.onChange(multiple ? Array.from(files) : files[0]);
            }}
            {...rest}
          />
        )}
      />
      <span className="text-red-500 text-xs italic capitalize ml-2 ">
        {message}
      </span>
    </div>
  );
}

export default RHFFileInput;
