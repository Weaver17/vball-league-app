"use client";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
    team: Team;
};

function TeamJoinLeagueForm({ team }: Props) {
    const teamJoinLeagueForm = useForm();

    return (
        <Form {...teamJoinLeagueForm}>
            <form action="" className="w-full grid grid-cols-2 gap-4">
                <div className="w-full">
                    <div className="container gap-4! ">
                        <h3 className="text-center font-semibold pb-2">
                            Join League
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
                <div className="w-full">
                    <div className="container gap-4! ">
                        <h3 className="text-center">Join League</h3>
                        <p>
                            To join a league, please contact your team captain.
                        </p>
                    </div>
                </div>
            </form>
        </Form>
    );
}

export default TeamJoinLeagueForm;
