import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../auth/form-components/form-input";
import FormSelect from "../../auth/form-components/form-select";
import {
    COURT_TYPES,
    LEVELS_OF_PLAY,
    PLAYER_TYPES,
    TEAM_SLOTS_OPTIONS,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FormDatePicker } from "../../auth/form-components/form-date-picker";
import { addDays } from "date-fns";

function CreateLeagueForm() {
    const createLeagueForm = useForm({
        defaultValues: {
            dateRange: {
                from: new Date(),
                to: addDays(new Date(), 7),
            },
        },
    });

    return (
        <Form {...createLeagueForm}>
            <form action="" className="flex flex-col gap-4 h-full">
                <FormInput
                    label="League Name"
                    formControl={createLeagueForm.control}
                    name="league-name"
                    type="text"
                    placeholder="Volleyball Nations League"
                    description="Enter your league's name"
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormSelect
                        title="Court Type"
                        array={COURT_TYPES}
                        formControl={createLeagueForm.control}
                        name="court-type"
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
                        name="player-type"
                    />
                    <FormSelect
                        title="Total Team Spots"
                        array={TEAM_SLOTS_OPTIONS}
                        formControl={createLeagueForm.control}
                        name="total-roster-spots"
                    />
                </div>
                <div className="w-full space-y-4">
                    <FormDatePicker
                        formControl={createLeagueForm.control}
                        name="league-date-range"
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
