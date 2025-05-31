import { z } from "zod";

export const initialUserSchema = z.object({
    id: z.string().optional(),
    email: z.string().email().min(1),
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    password: z.string().min(8).max(30),
});
