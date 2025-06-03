import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import CreateTeamForm from "./create-forms/create-team-form";
import { TTeam } from "@/interfaces/types";
import { createTeam } from "@/actions/actions";

function CreateTeamSheet() {
    async function onCreateTeamSubmit(formData: TTeam, player: Player) {
        try {
            const newTeam = await createTeam(formData, player);
            console.log(newTeam);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="cursor-pointer">Create Team</Button>
            </SheetTrigger>
            <SheetContent className="p-4">
                <SheetHeader>
                    <SheetTitle className="text-center text-2xl! border-b border-primary py-4 mb-4">
                        Create Team
                    </SheetTitle>
                </SheetHeader>
                <CreateTeamForm onCreateTeamSubmit={onCreateTeamSubmit} />
            </SheetContent>
        </Sheet>
    );
}

export default CreateTeamSheet;
