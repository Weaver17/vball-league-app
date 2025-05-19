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
