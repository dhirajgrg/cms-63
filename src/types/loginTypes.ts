import z from "zod";

export const LoginSchema = z.object({
  username: z.string().trim().nonempty('username is required'),
  password: z.string().min(1, "password required"),
});

export type ILoginData = z.infer<typeof LoginSchema>;
