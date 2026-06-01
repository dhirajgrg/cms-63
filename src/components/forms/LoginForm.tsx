import Button from "../ui/Button.tsx";
import { useForm } from "react-hook-form";
import RHFInput from "./RHFInput.tsx";
import { LoginSchema, type ILoginData } from "../../types/loginTypes.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router";
import axiosInstance from "../../lib/api/axios.ts";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { unknown } from "zod";

const LoginForm = () => {
  const navigate = useNavigate();
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
      const response = (await axiosInstance.post(
        "/auth/login",
        data,
      )) as unknown as { accessToken: string };
      
      Cookies.set("cookie", response.accessToken, {
        secure: true,
        sameSite: "strict",
        expires: 1,
      });

      toast.success("Login Successfully!!!");
      navigate("/admin");

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="py-16 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(LoginSubmit)}
        className=" shadow-md shadow-zinc-400 rounded-lg p-6 w-full max-w-sm mx-auto md:max-w-md "
      >
        <h1 className="text-center text-2xl font-semibold capitalize font-playfair text-neutral ">
          Editorial Studio
        </h1>
        <p className=" text-center text-xs   font-inter text-neutral">
          Acess your modernCMS workspace
        </p>
        <RHFInput
          message={errors?.username?.message}
          control={control}
          name="username"
          label="User Name : "
          type="text"
          placeholder="username"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg text-sm font-inter text-neutral  "
        />
        <RHFInput
          message={errors?.password?.message}
          control={control}
          name="password"
          label="Password : "
          labelRight="Forget password?"
          type="password"
          placeholder="password"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg text-sm font-inter text-neutral "
        />

        <div className="flex justify-center mt-2">
          <Button
            type="submit"
            className="cursor-pointer bg-violet-800  hover:bg-violet-600 text-tertiary rounded-full px-6 py-1 md:py-2 md:px-10 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 mt-4 text-xs font-inter"
          >
            Login
          </Button>
        </div>
        <div className="border border-b border-tertiary mt-6"></div>
        <div className="text-center mt-4 text-xs">
          <p>
            New to the platform?
            <NavLink to="/register" className="text-violet-800 cursor-pointer">
              Register your account
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
