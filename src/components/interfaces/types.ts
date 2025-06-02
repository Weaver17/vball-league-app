import { initialUserSchema } from "@/schema/auth/initialUserSchema";
import { playerSchema } from "@/schema/auth/playerSchema";
import { playerSignInSchema } from "@/schema/auth/playerSignInSchema";
import z from "zod";

export type InitialUser = z.infer<typeof initialUserSchema>;

export type PlayerSignIn = z.infer<typeof playerSignInSchema>;

export type TPlayer = z.infer<typeof playerSchema>;

export type DateRange = {
    from: Date | undefined;
    to: Date | undefined;
};
