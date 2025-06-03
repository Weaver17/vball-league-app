import z from "zod";

export const createTeamSchema = z.object({
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
    totalRosterSpots: z.number({
        required_error: "Total roster spots is required.",
    }),
});
