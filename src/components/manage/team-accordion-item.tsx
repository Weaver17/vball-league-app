"use client";

import { getTeamById } from "@/actions/actions";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import CutPlayerModal from "../app/modals/cut-player-modal";
import { Plus } from "lucide-react";

type TeamAccordionItemProps = {
    teamId: string;
    teamName: string;
    currentPlayerId: string;
};

function TeamAccordionItem({
    teamId,
    teamName,
    currentPlayerId,
}: TeamAccordionItemProps) {
    const [playerTeam, setPlayerTeam] = useState<Team | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTeamData = async (id: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const fetchedTeam = (await getTeamById(id)) as Team;
            setPlayerTeam(fetchedTeam);
        } catch (err) {
            console.error("Failed to fetch team data:", err);
            setError("Failed to load team details.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamData(teamId);
    }, [teamId]);

    if (isLoading) {
        return (
            <AccordionItem value={teamName} className="px-2 py-1">
                <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                    {teamName} (Loading...)
                </AccordionTrigger>
            </AccordionItem>
        );
    }

    if (error || !playerTeam) {
        return (
            <AccordionItem value={teamName} className="px-2 py-1">
                <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                    {teamName} ({error || "Data unavailable"})
                </AccordionTrigger>
            </AccordionItem>
        );
    }

    return (
        <AccordionItem value={teamName} className="px-2 py-1">
            <AccordionTrigger className="text-xl font-semibold cursor-pointer">
                {teamName}
            </AccordionTrigger>
            <AccordionContent className="text-base flex flex-col gap-2 ">
                {playerTeam.players && playerTeam.players.length > 0 ? (
                    playerTeam.players
                        .filter((p: { id: string }) => p.id !== currentPlayerId)
                        .map((p: Player) => (
                            <div
                                key={p.id}
                                className="flex items-center justify-between gap-2 px-2 border-b border-foreground pb-1 last:border-b-0"
                            >
                                <p>
                                    {p.firstName} {p.lastName}
                                </p>
                                <CutPlayerModal
                                    fetchTeamData={fetchTeamData}
                                    playerTeam={playerTeam}
                                    player={p}
                                />
                            </div>
                        ))
                ) : (
                    <p className="px-2 text-sm text-muted-foreground">
                        No other players on this team.
                    </p>
                )}
                <Button variant="ghost" className="w-1/4 mr-auto">
                    <Plus />
                    Add Players
                </Button>
            </AccordionContent>
        </AccordionItem>
    );
}

export default TeamAccordionItem;
