import { getTeamById } from "@/actions/actions";
import TeamJoinLeagueForm from "@/components/app/join/team-join-league-form";
import React from "react";

async function TeamJoinLeaguePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const team = (await getTeamById(id)) as Team;
    return (
        <section className="section">
            <TeamJoinLeagueForm team={team} />
        </section>
    );
}

export default TeamJoinLeaguePage;
