"use client";
import { Accordion } from "@/components/ui/accordion";
import TeamAccordionItem from "./accordion-items/team-accordion-item";

function CaptainManage({ player }: { player: Player }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="border-b border-foreground"
        >
            {player?.captainOf.map((team: Team) => (
                <TeamAccordionItem
                    key={team.id}
                    teamId={team.id}
                    teamName={team.name}
                    currentPlayerId={player.id}
                />
            ))}
        </Accordion>
    );
}

export default CaptainManage;
