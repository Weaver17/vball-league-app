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
import { toastSuccess } from "@/lib/toast";
import toast from "react-hot-toast";
import usePlayerContext from "@/hooks/use-player-context";

function CreateTeamForm({
    onCreateTeamSubmit,
}: {
    onCreateTeamSubmit: Function;
}) {
    const createTeamForm = useForm({
        defaultValues: {
            name: "",
            courtType: "",
            level: "",
            playerType: "",
            totalRosterSpots: "",
        },
    });

    const { player } = usePlayerContext();

    const onSubmit = () => {
        onCreateTeamSubmit(
            {
                name: createTeamForm.getValues("name"),
                courtType: createTeamForm.getValues("courtType"),
                level: createTeamForm.getValues("level"),
                playerType: createTeamForm.getValues("playerType"),
                totalRosterSpots: parseInt(
                    createTeamForm.getValues("totalRosterSpots")
                ),
            },
            player
        );
        toast("Team Created Successfully", toastSuccess);
    };

    return (
        <Form {...createTeamForm}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 h-full">
                <FormInput
                    label="Team Name"
                    formControl={createTeamForm.control}
                    name="name"
                    type="text"
                    placeholder="Empire Spikes Back"
                    description="Enter your team's name"
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormSelect
                        title="Court Type"
                        array={COURT_TYPES}
                        formControl={createTeamForm.control}
                        name="courtType"
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
                        name="playerType"
                    />
                    <FormSelect
                        title="Total Roster Spots"
                        array={TEAM_SLOTS_OPTIONS}
                        formControl={createTeamForm.control}
                        name="totalRosterSpots"
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
