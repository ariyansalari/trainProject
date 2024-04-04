import { FieldValues, get } from "react-hook-form";
import { TextInputProps } from "./text-input.type";
import { TextBox } from "../..";

export const TextInput = <TFormValues extends FieldValues>({
  name,
  register,
  rules,
  errors,
  variant,
  ...rest
}: TextInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;

  return (
    <>
      <TextBox
        {...register(name, rules)}
        {...(hasError ? { variant: "error" } : { variant: variant })}
        {...rest}
      />
      {hasError && <p className="mt-2 text-sm text-error">{error.message}</p>}
    </>
  );
};
