import { z } from "zod"


export const newpassword_zodSchema = z.object({
    password:z
    .string()
    .min(6,"Password must be atleast 6 character")
})