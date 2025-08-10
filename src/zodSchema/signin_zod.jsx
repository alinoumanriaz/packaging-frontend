import { z } from "zod"


export const signin_zodSchema = z.object({
    email:z
    .string()
    .email({message:"Invalid E-mail address"}),
    password:z
    .string()
    .min(6,"Password must be atleast 6 character")

})

