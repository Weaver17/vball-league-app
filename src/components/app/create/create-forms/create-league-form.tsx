"use client";
import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../auth/form-components/form-input";
import FormSelect from "../../auth/form-components/form-select";
import {
    COURT_TYPES,
    DAYS_OF_GAMES,
    LEVELS_OF_PLAY,
    PLAYER_TYPES,
    TEAM_SLOTS_OPTIONS,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FormDatePicker } from "../../auth/form-components/form-date-picker";
import { addDays } from "date-fns";
import usePlayerContext from "@/hooks/use-player-context";
import toast from "react-hot-toast";
import { toastSuccess } from "@/lib/toast";

function CreateLeagueForm({
    onCreateLeagueSubmit,
}: {
    onCreateLeagueSubmit: Function;
}) {
    const createLeagueForm = useForm({
        defaultValues: {
            name: "",
            courtType: "",
            level: "",
            playerType: "",
            totalTeamSpots: "",
            dayOfGames: "",
            leagueDateRange: {
                from: new Date(),
                to: addDays(new Date(), 7),
            },
        },
    });

    const { player } = usePlayerContext();

    const onSubmit = () => {
        onCreateLeagueSubmit(
            {
                name: createLeagueForm.getValues("name"),
                courtType: createLeagueForm.getValues("courtType"),
                level: createLeagueForm.getValues("level"),
                playerType: createLeagueForm.getValues("playerType"),
                totalTeamSpots: parseInt(
                    createLeagueForm.getValues("totalTeamSpots")
                ),
                dayOfGames: createLeagueForm.getValues("dayOfGames"),
                leagueDateRange: createLeagueForm.getValues("leagueDateRange"),
            },
            player
        );
        toast("League Created Successfully", toastSuccess);
    };

    return (
        <Form {...createLeagueForm}>
            <form onSubmit={onSubmit} className="flex flex-col gap-2 h-full">
                <FormInput
                    label="League Name"
                    formControl={createLeagueForm.control}
                    name="name"
                    type="text"
                    placeholder="Volleyball Nations League"
                    description="Enter your league's name"
                />

                <div className="grid grid-cols-2 gap-2">
                    <FormSelect
                        title="Court Type"
                        array={COURT_TYPES}
                        formControl={createLeagueForm.control}
                        name="courtType"
                    />
                    <FormSelect
                        title="Level"
                        array={LEVELS_OF_PLAY}
                        formControl={createLeagueForm.control}
                        name="level"
                    />
                    <FormSelect
                        title="Player Type"
                        array={PLAYER_TYPES}
                        formControl={createLeagueForm.control}
                        name="playerType"
                    />
                    <FormSelect
                        title="Total Team Spots"
                        array={TEAM_SLOTS_OPTIONS}
                        formControl={createLeagueForm.control}
                        name="totalTeamSpots"
                    />
                    <FormSelect
                        title="Day of Games"
                        array={DAYS_OF_GAMES}
                        formControl={createLeagueForm.control}
                        name="dayOfGames"
                    />
                </div>
                <div className="w-full space-y-4">
                    <FormDatePicker
                        formControl={createLeagueForm.control}
                        name="leagueDateRange"
                        label="League Date Range"
                    />
                </div>
                <p className="text-sm border-t border-secondary mt-auto mb-2 pt-4">
                    By creating this league, you will be assigned as the league
                    commissioner. Only the commissioner can add/remove teams.
                </p>
                <Button className="mb-4">Create League</Button>
            </form>
        </Form>
    );
}

export default CreateLeagueForm;
