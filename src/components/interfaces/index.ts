interface TableHeads {
    id: number;
    label: string;
}

interface League {
    id: string;
    name: string;
    slug: string;
    level: string;
    playerType: string;
    courtType: string;
    status: string;
    starts: Date;
    ends: Date;
    day: string;
    teamSlots: number;
    teams?: Team[];
    commissioner?: Player;
    commissionerId?: string;
    freeAgents?: Player[];
    createdAt: Date;
    updatedAt: Date;
}

interface Player {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mainPosition: string;
    secondPosition: string;
    height: string;
    level: string;
    gender: string;
    preferredCourtType: string;
    teams: Team[];
    captainOf: Team[];
    commissionerOf: League[];
    freeAgentIn: League[];
    createdAt: Date;
    updatedAt: Date;
}

interface Team {
    id: string;
    name: string;
    level: string;
    rosterSpots: number;
    playerType: string;
    courtType: string;
    players: Player[];
    teamCaptain?: Player;
    teamCaptainId?: string;
    league?: League;
    leagueId?: string;
    createdAt: Date;
    updatedAt: Date;
}

interface TLevelOfPlay {
    id: number;
    name: string;
    title: string;
    summary: string;
    description: string[];
}
