"use server";

import prisma from "@/lib/prisma";

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

        console.log("Fetched team:", team);

        if (!team) return [];

        return team.players;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
