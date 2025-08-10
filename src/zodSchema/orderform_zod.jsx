
import { z } from "zod";

export const orderform_zodSchema = z.object({

    email: z.string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email format" }),

    name: z.string()
        .min(3, { message: "Name is required" })
        .max(100, { message: "Name must be less than 100 characters" }),

    street: z.string()
        .min(1, { message: "Street is required" })
        .max(200, { message: "Street name must be less than 200 characters" }),

    country: z.string()
        .min(1, { message: "Country is required" })
        .max(100, { message: "Country name must be less than 100 characters" }),

    state: z.string()
        .min(1, { message: "State is required" })
        .max(100, { message: "State name must be less than 100 characters" }),

    postalCode: z.string()
        .min(1, { message: "Postal code is required" })
        .max(10, { message: "Must be less than 10 characters" }),

    phone: z.string()
        .min(10, { message: "Should be at least 10 digits" })
        .max(15, { message: "Should not exceed 15 digits" })
        .regex(/^0[3-9][0-9]{9}$/, { message: "Invalid phone number" }),
    // .or(z.string().regex(/^0[1-9][0-9]{1,2}-[0-9]{7}$/, { message: "Invalid landline phone number format" })),



})