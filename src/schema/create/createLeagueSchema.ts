import { z } from "zod";

export const createLeagueSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
});
