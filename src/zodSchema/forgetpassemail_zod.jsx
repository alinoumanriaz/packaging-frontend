import { z } from "zod"


export const forgetpassemail_zodSchema = z.object({
    email:z
    .string()
    .email({message:"Invalid E-mail address"})
})