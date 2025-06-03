"use client";
import usePlayerContextHook from "@/hooks/use-player-context";
import { Button } from "../ui/button";

function JoinLeagueBtn({ league }: { league: League }) {
    const { player } = usePlayerContextHook() as { player: Player };

    return (
        <>
            {player && player.level == league.level ? (
                <Button variant="link" className="cursor-pointer h-5 text-base">
                    Join League
                </Button>
            ) : null}
        </>
    );
}

export default JoinLeagueBtn;
