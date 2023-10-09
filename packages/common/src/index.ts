import { z } from "zod";

export const UserInput = z.object({
    email: z.string(),
    password: z.string()
})
export type username = string

export type UserInputType = z.infer<typeof UserInput>;