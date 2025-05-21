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
    commissionerId: string;
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
    captainId: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Team {
    id: string;
    name: string;
    level: string;
    openPositions: number;
    playerType: string;
    courtType: string;
    teamCaptainId: string;
    leagueId: string;
    players: Player[];
    _count: {
        players: number;
    };
    createdAt: Date;
    updatedAt: Date;
}
