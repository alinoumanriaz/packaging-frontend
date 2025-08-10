import { z } from "zod"


export const review_zodSchema = z.object({
    message: z.string()
        .min(3, { message: "Review is required" })
        .max(200, { message: "Review must be less than 200 characters" }),

})