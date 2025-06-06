"use client";
import { teamJoinLeague } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toastSuccess } from "@/lib/toast";
import { on } from "events";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
    team: Team;
    leagues?: League[];
};

function TeamJoinLeagueForm({ team, leagues }: Props) {
    const teamJoinLeagueForm = useForm();
    const [selectedLeague, setSelectedLeague] = useState<League | null>(null);

    const router = useRouter();

    const availableLeagues = leagues?.filter((league) => {
        return league.playerType === team.playerType;
    });

    const handleLeagueChange = (leagueId: string) => {
        teamJoinLeagueForm.setValue("leagueId", leagueId); // Update RHF field
        const league = availableLeagues?.find((l) => l.id === leagueId);
        setSelectedLeague(league || null);
    };

    const onSubmit = async () => {
        await teamJoinLeague(team.id, selectedLeague?.id ?? "");
        toast("Successfully joined league", toastSuccess);
        router.push(`/leagues/${selectedLeague?.id}`);
    };

    return (
        <Form {...teamJoinLeagueForm}>
            <form onSubmit={onSubmit}>
                <div className="container gap-4! ">
                    <FormField
                        control={teamJoinLeagueForm.control}
                        name="leagueId"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mx-auto">
                                <FormLabel className="text-center text-2xl font-semibold">
                                    {team.playerType} Leagues
                                </FormLabel>
                                <Select
                                    onValueChange={(value) =>
                                        handleLeagueChange(value)
                                    }
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full border-primary data-[placeholder]:text-primary">
                                        <SelectValue placeholder="Select League" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {availableLeagues?.length ? (
                                            availableLeagues.map((league) => (
                                                <SelectItem
                                                    key={league.id}
                                                    value={league.id}
                                                >
                                                    {league.name}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="" disabled>
                                                No leagues available
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    {selectedLeague && (
                        <>
                            <div className="flex flex-col items-center gap-2 mt-4">
                                <h5 className="font-semibold border-b border-primary pb-1">
                                    Team Spots
                                </h5>
                                {/* Assuming 'teams' is an array of teams in the league */}
                                <p>
                                    {selectedLeague.teams?.length || 0}/
                                    {selectedLeague.teamSlots}
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-4">
                                <h5 className="font-semibold border-b border-primary pb-1">
                                    League Start Date
                                </h5>
                                <p>
                                    {selectedLeague.starts
                                        ? new Date(
                                              selectedLeague.starts
                                          ).toLocaleDateString()
                                        : "N/A"}
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-4">
                                <h5 className="font-semibold border-b border-primary pb-1">
                                    League End Date
                                </h5>
                                <p>
                                    {selectedLeague.ends
                                        ? new Date(
                                              selectedLeague.ends
                                          ).toLocaleDateString()
                                        : "N/A"}
                                </p>
                            </div>
                        </>
                    )}
                    <FormField
                        control={teamJoinLeagueForm.control}
                        name="leagueFee"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mx-auto">
                                <FormLabel className="text-center text-xl ">
                                    {/* HARD CODED FOR NOW  */}
                                    League Fee = $120
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full border-primary data-[placeholder]:text-primary">
                                        <SelectValue placeholder="Select Payment Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Venmo">
                                            Venmo
                                        </SelectItem>
                                        <SelectItem value="PayPal">
                                            PayPal
                                        </SelectItem>
                                        <SelectItem value="Cash-App">
                                            Cash-App
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-2/3 mx-auto bg-primary! text-white! cursor-pointer hover:bg-primary/90!"
                        disabled={!selectedLeague}
                    >
                        Join
                    </Button>
                </div>
            </form>
        </Form>
    );
}

export default TeamJoinLeagueForm;
