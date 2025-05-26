import { initialUserSchema } from "@/schema/auth/initialUserSchema";
import { playerSignInSchema } from "@/schema/auth/playerSignInSchema";
import z from "zod";

export type InitialUser = z.infer<typeof initialUserSchema>;

export type PlayerSignIn = z.infer<typeof playerSignInSchema>;
