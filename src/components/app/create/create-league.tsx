import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import CreateLeagueForm from "./create-forms/create-league-form";
import { TLeague } from "@/interfaces/types";
import { createLeague } from "@/actions/actions";

function CreateLeagueSheet() {
    async function onCreateLeagueSubmit(formData: TLeague, player: Player) {
        try {
            const newLeague = await createLeague(formData, player);
            console.log(newLeague);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="cursor-pointer">Create League</Button>
            </SheetTrigger>
            <SheetContent className="px-4">
                <SheetHeader>
                    <SheetTitle className="text-center text-2xl! border-b border-primary py-2 mb-1">
                        Create League
                    </SheetTitle>
                </SheetHeader>
                <CreateLeagueForm onCreateLeagueSubmit={onCreateLeagueSubmit} />
            </SheetContent>
        </Sheet>
    );
}

export default CreateLeagueSheet;
