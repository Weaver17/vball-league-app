"use client";
import {
    COURT_TYPES,
    LEVELS_OF_PLAY,
    PLAYER_TYPES,
    TEAM_SLOTS_OPTIONS,
} from "@/lib/constants";

import { useForm } from "react-hook-form";
import FormSelect from "../../auth/form-components/form-select";
import FormInput from "../../auth/form-components/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

function CreateTeamForm() {
    const createTeamForm = useForm();

    return (
        <Form {...createTeamForm}>
            <form action="" className="flex flex-col gap-4 h-full">
                <FormInput
                    label="Team Name"
                    formControl={createTeamForm.control}
                    name="team-name"
                    type="text"
                    placeholder="Empire Spikes Back"
                    description="Enter your team name"
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormSelect
                        title="Court Type"
                        array={COURT_TYPES}
                        formControl={createTeamForm.control}
                        name="court-type"
                    />
                    <FormSelect
                        title="Level"
                        array={LEVELS_OF_PLAY}
                        formControl={createTeamForm.control}
                        name="level"
                    />
                    <FormSelect
                        title="Player Type"
                        array={PLAYER_TYPES}
                        formControl={createTeamForm.control}
                        name="player-type"
                    />
                    <FormSelect
                        title="Total Roster Spots"
                        array={TEAM_SLOTS_OPTIONS}
                        formControl={createTeamForm.control}
                        name="total-roster-spots"
                    />
                </div>
                <p className="text-sm border-t border-secondary mt-auto mb-4 pt-4">
                    By creating this team, you will be assigned team captain.
                    Only the team captain can edit the team, add/remove players
                    and join leagues.
                </p>
                <Button className="mb-4">Create Team</Button>
            </form>
        </Form>
    );
}

export default CreateTeamForm;
