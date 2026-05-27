import { useForm } from "react-hook-form";
import RHFInput from "./RHFInput.tsx";
import Button from "../ui/Button.tsx";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink } from "react-router";

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, "name must be minimum  3 character long")
      .max(30, "name must not exceed 30 character long"),
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

type IRegisterData = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const registerSubmit = (data: IRegisterData) => {
    console.log(data);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(registerSubmit)}
        className="bg-white shadow-zinc-400 shadow-md rounded-lg p-6 w-full max-w-sm mx-auto md:max-w-md mt-10"
      >
        <h1 className="text-center text-2xl font-semibold capitalize">
          Create Administrator Account
        </h1>
        <p className="pt-1 text-center text-xs  mb-6">
          Initialize your system credentials to begin managing editorial
          workflows.
        </p>
        <RHFInput
          message={errors?.name?.message}
          control={control}
          name="name"
          label="Full Name"
          type="text"
          placeholder="Jhon Doe"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
        <RHFInput
          message={errors?.email?.message}
          control={control}
          name="email"
          label="Email Address"
          type="email"
          placeholder="jhon@example.com"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
        <RHFInput
          message={errors?.password?.message}
          control={control}
          name="password"
          label="Password"
          type="password"
          placeholder="password"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
        <RHFInput
          message={errors?.confirmPassword?.message}
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="password"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />

        <div className="flex justify-center mt-2">
          <Button
            type="submit"
            className="bg-violet-800  hover:bg-violet-600 text-zinc-50 rounded-full px-6 py-1 md:py-2 md:px-10 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 mt-4"
          >
            Register
          </Button>
        </div>
        <div className="border border-b border-zinc-200 mt-6"></div>
        <div className="text-center mt-4 text-xs">
          <p>
            Already have an administrator account?{" "}
            <NavLink to="/login" className="text-violet-800">Sign In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
