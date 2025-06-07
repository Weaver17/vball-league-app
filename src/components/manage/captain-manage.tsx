"use client";
import { Accordion } from "@/components/ui/accordion";
import TeamAccordionItem from "./team-accordion-item";
import usePlayerContext from "@/hooks/use-player-context";
import { useRouter } from "next/navigation";

function CaptainManage({ player }: { player: Player }) {
    const { isLoggedIn } = usePlayerContext();

    const router = useRouter();

    if (!isLoggedIn) {
        return router.push("/");
    }

    return (
        <div>
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
        </div>
    );
}

export default CaptainManage;
