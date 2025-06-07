"use client";

import { getLeagueById } from "@/actions/actions";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from "react";

type LeagueAccordionItemProps = {
    leagueId: string;
    leagueName: string;
};

function LeagueAccordionItem({
    leagueId,
    leagueName,
}: LeagueAccordionItemProps) {
    const [playerLeague, setPlayerLeague] = useState<League | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchLeagueData = async (id: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const fetchedLeague = (await getLeagueById(id)) as League;
            setPlayerLeague(fetchedLeague);
        } catch (err) {
            console.error("Failed to fetch team data:", err);
            setError("Failed to load team details.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLeagueData(leagueId);
    }, [leagueId]);

    if (isLoading) {
        return (
            <AccordionItem value={leagueName} className="px-2 py-1">
                <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                    {leagueName} (Loading...)
                </AccordionTrigger>
            </AccordionItem>
        );
    }

    if (error || !playerLeague) {
        return (
            <AccordionItem value={leagueName} className="px-2 py-1">
                <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                    {leagueName} ({error || "Data unavailable"})
                </AccordionTrigger>
            </AccordionItem>
        );
    }

    return (
        <AccordionItem value={leagueName} className="px-2 py-1">
            <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                {leagueName}
            </AccordionTrigger>
            <AccordionContent className="text-base flex flex-col gap-2 ">
                {playerLeague.teams && playerLeague.teams.length > 0 ? (
                    playerLeague.teams.map((team: Team) => (
                        <div
                            key={team.id}
                            className="flex items-center justify-between gap-2 px-2 border-b border-foreground pb-1 last:border-b-0"
                        >
                            <p>{team.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="px-2 text-sm text-muted-foreground">
                        No teams in this league.
                    </p>
                )}
            </AccordionContent>
        </AccordionItem>
    );
}

export default LeagueAccordionItem;
