import { TextboxProps } from "@/app";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type TextInputProps<TFormValues extends FieldValues> = Omit<TextboxProps,'name'> & {
  register: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  name: Path<TFormValues>;
  rules?: RegisterOptions;
};
