import z from 'zod'


export const CreateProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
});

export type ICreateProduct = z.infer<typeof CreateProductSchema>