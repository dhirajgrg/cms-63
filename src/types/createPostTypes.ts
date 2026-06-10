import z from "zod";

export const CreatePostSchema = z.object({
  title: z.string().nonempty("title is required"),
  description: z.string().nonempty("description is required"),
  category: z.string().nonempty("category is required"),
  images: z.array(z.file()).nonempty("image is required"),
});

export type ICreatePost = z.infer<typeof CreatePostSchema>;
