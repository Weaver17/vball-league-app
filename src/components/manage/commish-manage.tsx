"use client";
import { Accordion } from "@/components/ui/accordion";
import CommishAccordionItem from "./accordion-items/commish-accordion-item";

function CommishManage({ player }: { player: Player }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="border-b border-foreground"
        >
            {player?.commissionerOf.map((league: League) => (
                <CommishAccordionItem
                    key={league.id}
                    leagueId={league.id}
                    leagueName={league.name}
                />
            ))}
        </Accordion>
    );
}

export default CommishManage;
