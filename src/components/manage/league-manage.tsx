"use client";
import { Accordion } from "@/components/ui/accordion";
import LeagueAccordionItem from "./accordion-items/league-accordion-item";

function LeagueManage({ player }: { player: Player }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="border-b border-foreground"
        >
            {player?.freeAgentIn.map((league: League) => (
                <LeagueAccordionItem
                    key={league.id}
                    leagueId={league.id}
                    leagueName={league.name}
                />
            ))}
        </Accordion>
    );
}

export default LeagueManage;
