"use server";

import prisma from "@/lib/prisma";

export const getAllTeams = async () => {
    try {
        const teams = await prisma.team.findMany({
            include: {
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
            },
        });

        return leagues;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// export const getLeagueById = async () => {
//     try {
//         const leagues = await prisma.league.findMany({
//             include: {
//                 teams: true,
//             },
//         });

//         return leagues;
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// };
