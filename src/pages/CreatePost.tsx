import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreatePostSchema,
  type ICreatePost,
} from "../types/createPostTypes.ts";
import RHFInput from "../components/forms/RHFInput.tsx";
import Select from "../components/ui/Select.tsx";
import Button from "../components/ui/Button.tsx";
import RHFFileInput from "../components/forms/RHFFileInput.tsx";

const options = [
  { title: "--choose values--", value: "" },
  { title: "Technology", value: "technology" },
  { title: "Business & Finance", value: "business" },
  { title: "Lifestyle", value: "lifestyle" },
  { title: "Design & Creative", value: "design" },
];

interface CreatePostProps {
  onCancel: () => void;
}

const CreatePost = ({ onCancel }: CreatePostProps) => {
  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      images: [],
    },
    resolver: zodResolver(CreatePostSchema),
  });

  const handleCreatePost = (data: ICreatePost) => {

    console.log(data);
    reset();
    setFocus("title")
  };
  return (
    <div className="py-6 border-b border-zinc-400 ">
      <h1 className="font-bold underline underline-offset-4 font-playfair capitalize px-6 mb-2">create a post</h1>
      <form
        onSubmit={handleSubmit(handleCreatePost)}
        className=" flex flex-col gap-3 px-6"
      >
        <RHFInput
          message={errors?.title?.message}
          control={control}
          name="title"
          label="title :"
          type="text"
          placeholder="title"
          className=" w-fit outline outline-zinc-400 px-2 py-1 rounded-lg text-sm text-neutral font-inter focus:outline-violet-400"
        />
        <RHFInput
          message={errors?.description?.message}
          control={control}
          name="description"
          label="description :"
          type="text"
          placeholder="description"
          className=" w-fit outline  outline-zinc-400 px-2 py-1 rounded-lg text-sm  text-neutral font-inter focus:outline-violet-400"
        />
        <Select
          message={errors?.category?.message}
          control={control}
          name="category"
          options={options}
          className="border border-violet-400 rounded-lg px-2 py-2 text-xs font-inter  "
        />

        <RHFFileInput
          message={errors?.images?.message}
          control={control}
          multiple
          name="images"
          label="upload images :"
          className="cursor-pointer w-fit outline  outline-zinc-400 px-2 py-1 rounded-lg text-sm mb-2 text-neutral font-inter focus:outline-violet-400"
        />

        <div className=" flex items-center gap-4">
          <Button
            disabled={isSubmitting}
            type="submit"
            onClick={handleSubmit(handleCreatePost)}
            className="  cursor-pointer bg-violet-800 hover:bg-violet-500 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-16 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 text-xs "
          >
            Create
          </Button>
          <Button
            disabled={isSubmitting}
            onClick={onCancel}
            className="  cursor-pointer bg-red-600 hover:bg-red-300 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-16 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 text-xs "
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
