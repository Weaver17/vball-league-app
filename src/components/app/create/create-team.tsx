import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import CreateTeamForm from "./create-forms/create-team-form";

function CreateTeamSheet() {
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
                <CreateTeamForm />
            </SheetContent>
        </Sheet>
    );
}

export default CreateTeamSheet;
