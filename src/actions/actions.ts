"use server";

import { PlayerSignIn, TLeague, TPlayer, TTeam } from "@/interfaces/types";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createSession, deleteSession, verifySession } from "@/lib/sessions";
import { playerSchema } from "@/schema/auth/playerSchema";
import { create } from "domain";
import { createTeamSchema } from "@/schema/create/createTeamSchema";
import { redirect } from "next/navigation";
import { createLeagueSchema } from "@/schema/create/createLeagueSchema";

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

export const createTeam = async (formData: TTeam, player: Player) => {
    try {
        const validationResults = createTeamSchema.safeParse({
            name: formData.name,
            courtType: formData.courtType,
            level: formData.level,
            playerType: formData.playerType,
            totalRosterSpots: formData.totalRosterSpots,
        });

        if (!validationResults.success) {
            return {
                errors: validationResults.error.flatten().fieldErrors,
            };
        }

        const { name, courtType, level, playerType, totalRosterSpots } =
            formData;

        const team = await prisma.team.create({
            data: {
                name: name,
                courtType: courtType,
                level: level,
                playerType: playerType,
                rosterSpots: totalRosterSpots,
                teamCaptain: {
                    connect: {
                        id: player.id,
                    },
                },
                players: {
                    connect: {
                        id: player.id,
                    },
                },
            },
        });

        redirect(`/teams/${team.id}`);

        return team;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const createLeague = async (formData: TLeague, player: Player) => {
    try {
        formData.leagueDateRange = {
            from: new Date(formData.leagueDateRange.from),
            to: new Date(formData.leagueDateRange.to),
        };

        const validationResults = createLeagueSchema.safeParse({
            name: formData.name,
            courtType: formData.courtType,
            level: formData.level,
            playerType: formData.playerType,
            totalTeamSpots: formData.totalTeamSpots,
            leagueDateRange: formData.leagueDateRange,
            dayOfGames: formData.dayOfGames,
        });

        console.log(formData);

        if (!validationResults.success) {
            return {
                errors: validationResults.error.flatten().fieldErrors,
            };
        }

        const {
            name,
            courtType,
            level,
            playerType,
            totalTeamSpots,
            leagueDateRange,
            dayOfGames,
        } = formData;

        const league = await prisma.league.create({
            data: {
                name: name,
                slug: name.toLowerCase().replace(/ /g, "-"),
                courtType: courtType,
                level: level,
                playerType: playerType,
                starts: leagueDateRange.from,
                ends: leagueDateRange.to,
                teamSlots: totalTeamSpots,
                commissioner: {
                    connect: {
                        id: player.id,
                    },
                },
                status: "Upcoming",
                day: dayOfGames,
            },
        });

        redirect(`/leagues/${league.id}`);

        return league;
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
