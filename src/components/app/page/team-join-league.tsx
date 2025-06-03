"use client";
import React from "react";
import PageLabel from "./label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import usePlayerContextHook from "@/hooks/use-player-context";

type Props = {
    league: League | null;
    teamCaptainId: string;
};

function TeamJoinLeague({ league, teamCaptainId }: Props) {
    const { player } = usePlayerContextHook();

    return (
        <>
            <PageLabel text="League" />

            {league === null ? (
                player.id === teamCaptainId ? (
                    <Button
                        variant="link"
                        className="cursor-pointer h-5 text-base"
                    >
                        Join League
                    </Button>
                ) : null
            ) : (
                <p>
                    <Link href={`/leagues/${league?.id}`}>{league?.name}</Link>
                </p>
            )}
        </>
    );
}

export default TeamJoinLeague;
