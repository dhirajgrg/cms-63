import LabelForm from "../ui/LabelForm.tsx";
import InputForm from "../ui/InputForm.tsx";
import Button from "../ui/Button.tsx";

const RegisterForm = () => {
  return (
    <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto md:max-w-md mt-10">
      <h1 className="text-center text-2xl font-semibold capitalize">
        Create Administrator Account
      </h1>
      <p className="pt-1 text-center text-xs  mb-6">
        Initialize your system credentials to begin managing editorial
        workflows.
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <LabelForm>Full Name</LabelForm>
        <InputForm
          type="text"
          placeholder="jhon doe"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <LabelForm>Email Address</LabelForm>
        <InputForm
          type="email"
          placeholder="jhon@example..com"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <LabelForm className="flex justify-between items-center">
          password
        </LabelForm>
        <InputForm
          type="password"
          placeholder="password"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <LabelForm className="flex justify-between items-center">
          confirm password
        </LabelForm>
        <InputForm
          type="password"
          placeholder="confirm password"
          className=" outline outline-zinc-200 px-2 py-1 rounded-lg "
        />
      </div>
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
            <span className="text-violet-800">Sign In</span>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
