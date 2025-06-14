import { playerSchema } from "@/schema/auth/playerSchema";
import { playerSignInSchema } from "@/schema/auth/playerSignInSchema";
import { createLeagueSchema } from "@/schema/create/createLeagueSchema";
import { createTeamSchema } from "@/schema/create/createTeamSchema";
import z from "zod";

export type PlayerSignIn = z.infer<typeof playerSignInSchema>;

export type TPlayer = z.infer<typeof playerSchema>;

export type TTeam = z.infer<typeof createTeamSchema>;

export type TLeague = z.infer<typeof createLeagueSchema>;
