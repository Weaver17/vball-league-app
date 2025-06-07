"use client";
import usePlayerContextHook from "@/hooks/use-player-context";
import { Button } from "../ui/button";
import Link from "next/link";

function JoinLeagueBtn({ league }: { league: League }) {
    const { player } = usePlayerContextHook() as { player: Player };

    const isPlayerEligible = () => {
        if (!player || !league) return false;

        // Check if the player's level matches the league's level
        if (player.level !== league.level) return false;

        // Check if the player is already in the league
        if (league.freeAgents?.find((player) => player.id === player.id))
            return false;

        // Check if the player gender matches the league's player type
        if (league.playerType === "Men's" && player.gender !== "Male")
            return false;
        if (league.playerType === "Women's" && player.gender !== "Female")
            return false;

        if (league.playerType === "Co-ed") return true; // Co-ed leagues are open for all
        if (league.playerType === "Rev-co") return true; // Rev-co leagues are open for all

        return true;
    };

    return (
        <>
            {isPlayerEligible() ? (
                <Button variant="link" className="cursor-pointer h-5 text-base">
                    <Link href={`/leagues/${league.id}/join-as-free-agent`}>
                        Join League
                    </Link>
                </Button>
            ) : null}
        </>
    );
}

export default JoinLeagueBtn;
