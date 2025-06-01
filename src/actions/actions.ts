"use server";

import {
    InitialUser,
    PlayerSignIn,
    TPlayer,
} from "@/components/interfaces/types";
import prisma from "@/lib/prisma";
import { initialUserSchema } from "@/schema/auth/initialUserSchema";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createSession, deleteSession, verifySession } from "@/lib/sessions";
import { playerSchema } from "@/schema/auth/playerSchema";
import { equal } from "assert";

// GETS

export const getAllTeams = async () => {
    try {
        const teams = await prisma.team.findMany({
            include: {
                players: true,
                teamCaptain: true,
                league: true,
            },
        });

        return teams;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getAllLeagues = async () => {
    try {
        const leagues = await prisma.league.findMany({
            include: {
                teams: true,
                commissioner: true,
                freeAgents: true,
            },
        });

        return leagues;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getLeagueById = async (leagueId: string) => {
    try {
        const league = await prisma.league.findUnique({
            where: {
                id: leagueId,
            },
            include: {
                teams: true,
                freeAgents: true,
                commissioner: true,
            },
        });

        return league;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getPlayerById = async (playerId: string) => {
    try {
        const player = await prisma.player.findUnique({
            where: {
                id: playerId,
            },
            include: {
                teams: true,
                captainOf: true,
                commissionerOf: true,
                freeAgentIn: true,
            },
        });

        return player;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getTeamRoster = async (teamId: string) => {
    try {
        const team = await prisma.team.findUnique({
            where: { id: teamId },
            include: { players: true },
        });

        if (!team) return [];

        return team.players;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getCurrentLeagues = async () => {
    try {
        const activeLeagues = await prisma.league.findMany({
            where: {
                status: "Active",
            },
        });

        return activeLeagues;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getAllPlayers = async () => {
    try {
        const teams = await prisma.player.findMany({
            include: {
                teams: true,
                captainOf: true,
                commissionerOf: true,
                freeAgentIn: true,
            },
        });

        return teams;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getTeamById = async (teamId: string) => {
    try {
        const team = await prisma.team.findUnique({
            where: {
                id: teamId,
            },
            include: {
                players: true,
                teamCaptain: true,
                league: true,
            },
        });

        return team;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getPlayerByEmail = async ({ email, password }: PlayerSignIn) => {
    try {
        const player = await prisma.player.findUnique({
            where: {
                email: email,
            },
        });

        if (!player) {
            throw new Error("Player not found");
        }

        if (player.password !== password) {
            throw new Error("Incorrect password");
        }

        // Create Session
        await createSession(player.id);

        return player;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const getPlayer = async () => {
    try {
        const session = await verifySession();

        if (!session) {
            return null;
        }

        const currentPlayer = await prisma.player.findUnique({
            where: {
                id: session.userId as string,
            },
        });

        console.log(currentPlayer);

        return currentPlayer;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// POSTS

export const createPlayer = async (formData: TPlayer) => {
    try {
        const validationResults = playerSchema.safeParse({
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            password: formData.password,
            mainIndoorPosition: formData.mainIndoorPosition,
            secondIndoorPosition: formData.secondIndoorPosition,
            beachPosition: formData.beachPosition,
            height: formData.height,
            level: formData.level,
            gender: formData.gender,
            preferredCourtType: formData.preferredCourtType,
        });

        if (!validationResults.success) {
            return {
                errors: validationResults.error.flatten().fieldErrors,
            };
        }

        const {
            email,
            firstName,
            lastName,
            password,
            mainIndoorPosition,
            secondIndoorPosition,
            beachPosition,
            height,
            level,
            gender,
            preferredCourtType,
        } = formData;

        const existingUser = await prisma.player.findUnique({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return {
                errors: {
                    email: ["Email already in use"],
                },
            };
        }

        const player = await prisma.player.create({
            data: {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                mainIndoorPosition: mainIndoorPosition,
                secondIndoorPosition: secondIndoorPosition,
                beachPosition: beachPosition,
                height: height,
                level: level,
                gender: gender,
                preferredCourtType: preferredCourtType,
            },
        });

        // Create Session
        await createSession(player.id);

        return player;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// DELETE SESSION
export const deleteCurrentSession = async () => {
    try {
        const session = await verifySession();

        if (!session) {
            return null;
        }

        await deleteSession();

        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// export const createInitialUser = async (formData: InitialUser) => {
//     try {
//         // Validate Fields
//         const validationResults = initialUserSchema.safeParse({
//             email: formData.email,
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             password: formData.password,
//         });

//         if (!validationResults.success) {
//             return {
//                 errors: validationResults.error.flatten().fieldErrors,
//             };
//         }

//         // Create User
//         const { email, firstName, lastName, password } = formData;

//         const existingUser = await prisma.initialUser.findUnique({
//             where: {
//                 email: email,
//             },
//         });

//         if (existingUser) {
//             throw new Error("Email already in use");
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const initialUser = await prisma.initialUser.create({
//             data: {
//                 email: email,
//                 firstName: firstName,
//                 lastName: lastName,
//                 password: hashedPassword,
//             },
//         });

//         // Create Session
//         await createSession(initialUser.id);
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// };

// HANDLES

// async function handleSignUpClick() {
//     try {
//         await createInitialUser({
//             email: signUpForm.getValues("email"),
//             password: signUpForm.getValues("password"),
//             firstName: signUpForm.getValues("firstName"),
//             lastName: signUpForm.getValues("lastName"),
//         } as InitialUser);
//         redirect("/sign-up/create-player");
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// }
