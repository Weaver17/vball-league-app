import {
    Brackets,
    BracketsIcon,
    Group,
    Home,
    List,
    ListCheck,
    ListChecksIcon,
    ListEnd,
    ListIcon,
    ListTree,
    ListX,
    PlayCircleIcon,
    TorusIcon,
    User,
    Volleyball,
} from "lucide-react";

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

export const TEMPORARY_CURRENT_LEAGUES = [
    {
        id: 1,
        name: "Cap City",
        level: "A/AA",
        playerType: "Coed",
        courtType: "Court",
    },
    {
        id: 2,
        name: "Open League 1",
        level: "Open",
        playerType: "Mens",
        courtType: "Beach",
    },
    {
        id: 3,
        name: "B League 1",
        level: "B",
        playerType: "Coed",
        courtType: "Court",
    },
    {
        id: 4,
        name: "BB League 1",
        level: "BB",
        playerType: "Coed",
        courtType: "Court",
    },
    {
        id: 5,
        name: "Beer League",
        level: "Beer",
        playerType: "Coed",
        courtType: "Beach",
    },
    {
        id: 6,
        name: "Semi-Pro",
        level: "Semi",
        playerType: "Womens",
        courtType: "Court",
    },
];
