import { z } from "zod"


export const signUp_zodSchema = z.object({
    username: z
        .string()
        .min(2, "Username must be atleast 2 character")
        .max(20, "Username must be atleast 20 character")
        .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters"),
    email: z
        .string()
        .email({ message: "Invalid E-mail address" }),
    password: z
        .string()
        .min(6, "Password must be atleast 6 character")

})

