import RHFInput from "../components/forms/RHFInput.tsx";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreatePostSchema,
  type ICreatePost,
} from "../types/createPostTypes.ts";

const CreateProduct = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
    resolver: zodResolver(CreatePostSchema),
  });

  const handleCreatePost = (data: ICreatePost) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="font-bold font-playfair capitalize">create a post</h1>
      <div className="border border-zinc-200 border-b"></div>
      <RHFInput
        control={control}
        name="title"
        label="title"
        type="text"
        placeholder="title"
        className=" w-fit outline outline-zinc-200 px-2 py-1 rounded-lg text-sm text-neutral font-inter"
      />
      <RHFInput
        control={control}
        name="description"
        label="description"
        type="text"
        placeholder="description"
        className=" w-fit outline outline-zinc-200 px-2 py-1 rounded-lg text-sm text-neutral font-inter"
      />
      <label
        htmlFor="image"
        className="flex px-4 py-1 mt-4 items-center w-fit  border-2 border-dashed border-violet-400 rounded-full bg-violet-50 cursor-pointer transition-all duration-200  hover:bg-violet-100 hover:border-violet-600 hover:shadow-md"
      >
        <div className="text-2xl mb-1">📤</div>
        <div>
          <p className="text-xs font-medium text-violet-700">
            Click to upload image
          </p>
          <p className=" text-violet-400 mt-1 text-xs">
            PNG, JPG, JPEG (max 5MB)
          </p>
        </div>
      </label>

      <RHFInput
        control={control}
        name="image"
        type="file"
        id="image"
        className="hidden"
      />

      <RHFInput
        id="image"
        control={control}
        name="image"
        type="file"
        className="hidden"
      />

      <div className="">
        <Button
          onClick={handleSubmit(handleCreatePost)}
          className="  cursor-pointer bg-violet-800 hover:bg-violet-500 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-16 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 text-xs "
        >
          Create
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default CreateProduct;
