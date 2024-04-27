import { z } from "zod";
import { signInSchema } from "./signin.schema";

export type SignInFormProps=z.infer<typeof signInSchema>