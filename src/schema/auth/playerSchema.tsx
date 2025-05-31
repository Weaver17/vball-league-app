import { z } from "zod";

export const playerSchema = z.object({
    id: z.string().optional(),
    email: z.string().email().min(1),
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    password: z.string().min(8),
    mainIndoorPosition: z.string().min(1),
    secondIndoorPosition: z.string().min(1),
    beachPosition: z.string().min(1),
    height: z.string().min(1),
    level: z.string().min(1),
    gender: z.string().min(1),
    preferredCourtType: z.string().min(1),
});
