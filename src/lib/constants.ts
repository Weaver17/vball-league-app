import { Group, Home, User, Volleyball } from "lucide-react";

export const SIDEBAR_OPTIONS = [
    {
        id: 1,
        url: "/",
        name: "Home",
        icon: Home,
    },
    {
        id: 2,
        url: "/leagues",
        name: "Leagues",
        icon: Group,
    },
    {
        id: 3,
        url: "/teams",
        name: "Teams",
        icon: Volleyball,
    },
    {
        id: 4,
        url: "/players",
        name: "Players",
        icon: User,
    },
];

export const CURRENT_LEAGUE_TABLEHEADS = [
    {
        id: 1,
        label: "Name",
    },
    {
        id: 2,
        label: "Level",
    },
    {
        id: 3,
        label: "Player Type",
    },
    {
        id: 4,
        label: "Court Type",
    },
    {
        id: 5,
        label: "End Date",
    },
];

export const TEMPORARY_CURRENT_LEAGUES = [
    {
        id: 1,
        name: "Cap City",
        level: "A/AA",
        playerType: "Coed",
        courtType: "Court",
        endDate: "6/8/25",
    },
    {
        id: 2,
        name: "Open League 1",
        level: "Open",
        playerType: "Mens",
        courtType: "Beach",
        endDate: "6/8/25",
    },
    {
        id: 3,
        name: "B League 1",
        level: "B",
        playerType: "Coed",
        courtType: "Court",
        endDate: "6/8/25",
    },
    {
        id: 4,
        name: "BB League 1",
        level: "BB",
        playerType: "Coed",
        courtType: "Court",
        endDate: "6/8/25",
    },
    {
        id: 5,
        name: "Beer League",
        level: "Beer",
        playerType: "Coed",
        courtType: "Beach",
        endDate: "6/8/25",
    },
    {
        id: 6,
        name: "Semi-Pro",
        level: "Semi",
        playerType: "Womens",
        courtType: "Court",
        endDate: "6/8/25",
    },
];
