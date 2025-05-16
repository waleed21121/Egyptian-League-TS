import { z } from "zod";


export const IdSchema = z.object({
    id: z.string().uuid()
})

export type Id = z.infer<typeof IdSchema>
