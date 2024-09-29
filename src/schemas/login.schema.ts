import { z } from "zod";

export const loginValidationSchema = z.object({
    email : z.string().trim().email("Please Enter a Valid Email: "),
    password : z.string().trim().min(6 , "Password At least 6 character")
})