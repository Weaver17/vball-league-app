"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import usePlayerContextHook from "@/hooks/use-player-context";

type Props = {
    league: League | null;
    teamCaptain: Player | null;
    children: React.ReactNode;
};

function TeamJoinLeague({ league, teamCaptain, children }: Props) {
    const { player } = usePlayerContextHook();

    console.log(league?.name, player?.id, teamCaptain?.id);

    return (
        <>
            {children}

            {league == null ? (
                player && player.id === teamCaptain?.id ? (
                    <Button
                        variant="link"
                        className="cursor-pointer h-5 text-base"
                    >
                        Join League
                    </Button>
                ) : null
            ) : (
                <p>
                    <Link href={`/leagues/${league.id}`}>{league.name}</Link>
                </p>
            )}
        </>
    );
}

export default TeamJoinLeague;
