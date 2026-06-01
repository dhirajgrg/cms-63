import z from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, "name must be minimum  3 character long")
      .max(30, "name must not exceed 30 character long"),
    username: z.string().nonempty().min(3,"username must be minimum 3 character long"),
    email: z.email(),
    password: z
      .string()
      .min(8, "password must be 8 character long")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&]).+$/,
        "Password must contain at least one  letter, number and special character",
      ),
    confirmPassword: z.string().min(8, "password must be 8 character long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "password do not matched !",
    path: ["confirmPassword"],
  });

export type IRegisterData = z.infer<typeof RegisterSchema>;
