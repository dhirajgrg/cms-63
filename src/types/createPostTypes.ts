import z from 'zod'



export const CreatePostSchema = z.object({
  title: z.string().nonempty("title is required"),
  description: z.string().nonempty("description is required"),
  category: z.string(),
  image: z.string().nonempty("image is required"),
});

export type ICreatePost = z.infer<typeof CreatePostSchema>;