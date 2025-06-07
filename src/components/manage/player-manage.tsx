import React from "react";
import { Accordion } from "../ui/accordion";
import PlayerAccordionItem from "./accordion-items/player-accordion-item";

function PlayerManage({ player }: { player: Player }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="border-b border-foreground"
        >
            {player?.teams.map((team: Team) => (
                <PlayerAccordionItem
                    key={team.id}
                    teamId={team.id}
                    teamName={team.name}
                    currentPlayerId={player.id}
                />
            ))}
        </Accordion>
    );
}

export default PlayerManage;
