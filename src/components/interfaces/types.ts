import { initialUserSchema } from "@/schema/auth/initialUserSchema";
import { playerSignInSchema } from "@/schema/auth/playerSignInSchema";
import z from "zod";

export type InitialUser = z.infer<typeof initialUserSchema>;

export type PlayerSignIn = z.infer<typeof playerSignInSchema>;

// for context
export type TPlayer = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mainIndoorPosition: string;
    secondIndoorPosition: string;
    beachPosition: string;
    height: string;
    level: string;
    gender: string;
    preferredCourtType: string;
    teams: Team[];
    captainOf: Team[];
    commissionerOf: League[];
    freeAgentIn: League[];
    createdAt: Date;
    updatedAt: Date;
};
