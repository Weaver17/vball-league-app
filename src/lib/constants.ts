import {
    CalendarRange,
    Group,
    Home,
    User,
    Users,
    Volleyball,
} from "lucide-react";
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
        group: "Blockers",
        label: "Blocker",
    },
    {
        id: 1,
        group: "Defenders",
        label: "Defender",
    },
    {
        id: 2,
        group: "Hybrids",
        label: "Hybrid",
    },
    {
        id: 3,
        group: "None",
        label: "None",
    },
];

export const INDOOR_POSITIONS = [
    {
        id: 0,
        group: "Setters",
        label: "Setter",
    },
    {
        id: 1,
        group: "Outside Hitters",
        label: "Outside Hitter",
    },
    {
        id: 2,
        group: "Middle Blockers",
        label: "Middle Blocker",
    },
    {
        id: 3,
        group: "Opposites",
        label: "Opposite",
    },
    {
        id: 4,
        group: "Right Side Hitters",
        label: "Right Side Hitter",
    },
    {
        id: 5,
        group: "Liberos",
        label: "Libero",
    },
    {
        id: 6,
        group: "Defensive Specialists",
        label: "Defensive Specialist",
    },
    {
        id: 7,
        group: "None",
        label: "None",
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
        label: "Main Indoor Position",
    },
    {
        id: 4,
        label: "Secondary Indoor Position",
    },
    {
        id: 5,
        label: "Beach Position",
    },

    {
        id: 6,
        label: "Height",
    },
    {
        id: 7,
        label: "Gender",
    },

    {
        id: 8,
        label: "Preferred Court Type",
    },

    {
        id: 9,
        label: "Teams",
    },
];

export const CREATE_PLAYER_HEIGHTS = Array.from(
    { length: 91 - 58 + 1 },
    (_, i) => {
        const totalInches = i + 58;
        const feet = Math.floor(totalInches / 12);
        const inches = totalInches % 12;
        return {
            id: i + 1,
            label: `${feet}'${inches}"`,
        };
    }
);

export const CREATE_PLAYER_GENDERS = [
    {
        id: 1,
        label: "Male",
    },
    {
        id: 2,
        label: "Female",
    },
    {
        id: 3,
        label: "Other",
    },
    {
        id: 4,
        label: "Prefer Not to Say",
    },
];

export const PLAYER_TYPES = [
    {
        id: 1,
        label: "Men's",
    },
    {
        id: 2,
        label: "Women's",
    },
    {
        id: 3,
        label: "Co-ed",
    },
    {
        id: 4,
        label: "Rev-co",
    },
];

export const COURT_TYPES = [
    {
        id: 1,
        label: "Beach",
    },
    {
        id: 2,
        label: "Court",
    },
];

export const LEVELS_OF_PLAY = [
    {
        id: 1,
        label: "Open",
    },
    {
        id: 2,
        label: "A",
    },
    {
        id: 3,
        label: "AA",
    },
    {
        id: 4,
        label: "B",
    },
    {
        id: 5,
        label: "BB",
    },
    {
        id: 8,
        label: "Beer",
    },
];

export const TEAM_SLOTS_OPTIONS = Array.from({ length: 29 }, (_, i) => {
    const num = i + 2;
    return {
        id: num,
        label: num.toString(),
    };
});

export const DAYS_OF_GAMES = [
    {
        id: 1,
        label: "Monday",
    },
    {
        id: 2,
        label: "Tuesday",
    },
    {
        id: 3,
        label: "Wednesday",
    },
    {
        id: 4,
        label: "Thursday",
    },
    {
        id: 5,
        label: "Friday",
    },
    {
        id: 6,
        label: "Saturday",
    },
    {
        id: 7,
        label: "Sunday",
    },
];
