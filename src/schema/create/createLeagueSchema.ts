import { z } from "zod";

export const createLeagueSchema = z.object({
    name: z
        .string({
            required_error: "A name is required.",
        })
        .min(1),
    courtType: z
        .string({
            required_error: "Court type is required.",
        })
        .min(1),
    level: z
        .string({
            required_error: "Level is required.",
        })
        .min(1),
    playerType: z
        .string({
            required_error: "Player type is required.",
        })
        .min(1),
    totalTeamSpots: z.number({
        required_error: "Total team spots is required.",
    }),
    dayOfGames: z
        .string({
            required_error: "Day of games is required.",
        })
        .min(1),
    leagueDateRange: z
        .object({
            from: z.date({
                required_error: "Start date is required",
                invalid_type_error: "Invalid start date",
            }),
            to: z.date({
                required_error: "End date is required",
                invalid_type_error: "Invalid end date",
            }),
        })
        .refine((data) => data.from < data.to, {
            message: "End date must be after start date",
        }),
});
