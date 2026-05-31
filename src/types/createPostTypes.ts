import z from 'zod'


export const CreatePostSchema = z.object({
  title: z.string().nonempty('post title is required'),
  description: z.string('post description is required'),
  image:z.string(),

});

export type ICreatePost = z.infer<typeof CreatePostSchema>