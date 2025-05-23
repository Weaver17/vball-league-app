import { Group, Home, User, Volleyball } from "lucide-react";
import defaultProfilePic from "../../public/default-profile-pic.png";
import defaultLeaguePic from "../../public/default-league-logo.svg";
import defaultTeamPic from "../../public/default-team-logo.svg";

export const images = {
    defaultProfilePic,
    defaultLeaguePic,
    defaultTeamPic,
} as any;

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

export const BEACH_POSITIONS = [
    {
        id: 0,
        label: "Blockers",
        position: "Blocker",
    },
    {
        id: 1,
        label: "Defenders",
        position: "Defender",
    },
];

export const INDOOR_POSITIONS = [
    {
        id: 0,
        label: "Setters",
        position: "Setter",
    },
    {
        id: 1,
        label: "Outside Hitters",
        position: "Outside Hitter",
    },
    {
        id: 2,
        label: "Middle Blockers",
        position: "Middle Blocker",
    },
    {
        id: 3,
        label: "Opposites",
        position: "Opposide",
    },
    {
        id: 4,
        label: "Right Side Hitters",
        position: "Right Side Hitter",
    },
    {
        id: 5,
        label: "Liberos",
        position: "Libero",
    },
    {
        id: 6,
        label: "Defensive Specialists",
        position: "Defensive Specialist",
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

export const ALL_LEAGUES_TABLEHEADS = [
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
        label: "Status",
    },
    {
        id: 6,
        label: "Start Date",
    },
    {
        id: 7,
        label: "End Date",
    },
    {
        id: 8,
        label: "Day(s)",
    },
    {
        id: 9,
        label: "Team Slots",
    },
];

export const ALL_TEAMS_TABLEHEADS = [
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
        label: "Open Positions",
    },
    {
        id: 6,
        label: "Team Captain",
    },
    {
        id: 7,
        label: "Total Players",
    },
    {
        id: 8,
        label: "League",
    },
];

export const ALL_PLAYERS_TABLEHEADS = [
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
        label: "Main Position",
    },
    {
        id: 4,
        label: "Secondary Position",
    },
    {
        id: 5,
        label: "Height",
    },
    {
        id: 6,
        label: "Gender",
    },

    {
        id: 7,
        label: "Preferred Court Type",
    },

    {
        id: 8,
        label: "Teams",
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
