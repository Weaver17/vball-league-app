import { getAllLeagues, getTeamById } from "@/actions/actions";
import TeamJoinLeagueForm from "@/components/app/join/team-join-league-form";
import Link from "next/link";
import React from "react";

async function TeamJoinLeaguePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const team = (await getTeamById(id)) as Team;

    const leagues = (await getAllLeagues()) as League[];

    return (
        <section className="section">
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="w-full">
                    <div className="container gap-4! ">
                        <h3 className="text-center font-semibold pb-2">
                            Join A League
                        </h3>
                        <div>
                            <h5 className="text-center border-b border-primary pb-2">
                                Team
                            </h5>
                            <h4 className="text-center font-medium my-4">
                                {team.name}
                            </h4>
                        </div>

                        <div>
                            <h5 className="text-center border-b border-primary pb-2">
                                Roster
                            </h5>
                            <ul>
                                {team.players?.map((player) => (
                                    <li
                                        key={player.id}
                                        className="text-center my-2"
                                    >
                                        <Link
                                            href={`/players/${player.id}`}
                                            className=""
                                        >
                                            {player.firstName} {player.lastName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <TeamJoinLeagueForm team={team} leagues={leagues} />
            </div>
        </section>
    );
}

export default TeamJoinLeaguePage;
