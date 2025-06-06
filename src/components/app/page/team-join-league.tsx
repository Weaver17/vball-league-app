"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import usePlayerContextHook from "@/hooks/use-player-context";

type Props = {
    team: Team;
    league: League | null;
    teamCaptain: Player | null;
    children: React.ReactNode;
};

function TeamJoinLeague({ team, league, teamCaptain, children }: Props) {
    const { player } = usePlayerContextHook();

    return (
        <>
            {children}

            {league == null ? (
                player && player.id === teamCaptain?.id ? (
                    <Button
                        variant="link"
                        className="cursor-pointer h-5 text-base"
                    >
                        <Link href={`/teams/${team.id}/join-league`}>
                            Join League
                        </Link>
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
