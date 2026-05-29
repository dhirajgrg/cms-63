import RHFInput from "../components/forms/RHFInput.tsx";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductSchema,type ICreateProduct } from "../types/createProductTypes.ts";



const CreateProduct = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      discount: 0,
    },
    resolver: zodResolver(CreateProductSchema),
  });

  const handleCreateProduct=(data:ICreateProduct)=>{
    console.log(data)
  }
  return (
    <div>
      <h1>create a product</h1>
      <RHFInput
        control={control}
        name="title"
        label="title"
        type="text"
        placeholder="product title"
        className=" w-fit outline outline-zinc-200 px-2 py-1 rounded-lg text-sm text-neutral font-inter"
      />

      <RHFInput
        control={control}
        name="price"
        label="price"
        type="number"
        placeholder="price"
        className="w-fit outline outline-zinc-200 px-2 py-1 rounded-lg text-sm text-neutral font-inter"
      />

      <RHFInput
        control={control}
        name="discount"
        label="discount price"
        type="number"
        placeholder="price"
        className="w-fit outline outline-zinc-200 px-2 py-1 rounded-lg text-sm text-neutral font-inter"
      />

      <div className="">
        <Button
        onClick={handleSubmit(handleCreateProduct)}
        className="  cursor-pointer bg-violet-800 hover:bg-violet-500 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-16 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 text-xs ">
          Create
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default CreateProduct;
