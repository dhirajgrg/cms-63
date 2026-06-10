import Button from "../ui/Button.tsx";
import { useForm } from "react-hook-form";
import RHFInput from "./RHFInput.tsx";
import { LoginSchema, type ILoginData } from "../../types/loginTypes.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router";
import { toast } from "sonner";
import useUser from "../../lib/hooks/useUser.tsx";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const LoginSubmit = async (data: ILoginData) => {
    try {
      const response = await login(data);
      console.log(response);
      toast.success("Login successful!");
      navigate("/admin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("something went very wrong!!!");
      }
    }
  };

  return (
    <div className="py-16 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(LoginSubmit)}
        className=" flex flex-col  shadow-md shadow-zinc-400 rounded-lg py-6 px-10 w-full max-w-sm mx-auto md:max-w-md "
      >
        <h1 className="text-center text-2xl font-semibold capitalize font-playfair text-neutral ">
          Editorial Studio
        </h1>
        <p className=" text-center text-xs   font-inter text-neutral mb-3 ">
          Acess your modernCMS workspace
        </p>
        <RHFInput
          message={errors?.username?.message}
          control={control}
          name="username"
          label="User Name : "
          type="text"
          placeholder="username"
          className="w-full outline outline-zinc-400 px-2 py-1 rounded-lg text-sm font-inter text-neutral mb-3  "
        />
        <RHFInput
          message={errors?.password?.message}
          control={control}
          name="password"
          label="Password : "
          type="password"
          placeholder="password"
          className="w-full  outline outline-zinc-400 px-2 py-1 rounded-lg text-sm font-inter text-neutral mb-3 "
        />

        <div className="flex justify-center ">
          <Button className="cursor-pointer bg-violet-800  hover:bg-violet-600 text-tertiary rounded-full px-6 py-1 md:py-2 md:px-10 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 text-xs font-inter">
            Login
          </Button>
        </div>
        <div className="border border-b border-tertiary mt-6"></div>
        <div className="text-center mt-4 text-xs">
          <p>
            New to the platform?
            <NavLink to="/register" className="pl-1 text-violet-800 cursor-pointer">
              Register your account
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
