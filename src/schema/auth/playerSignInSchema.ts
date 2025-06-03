import { z } from "zod";

export const playerSignInSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(8).max(30),
});
