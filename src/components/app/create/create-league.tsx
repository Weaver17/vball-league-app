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

function CreateLeagueSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="cursor-pointer">Create League</Button>
            </SheetTrigger>
            <SheetContent className="p-4">
                <SheetHeader>
                    <SheetTitle className="text-center text-2xl! border-b border-primary py-4 mb-4">
                        Create League
                    </SheetTitle>
                </SheetHeader>
                <CreateLeagueForm />
            </SheetContent>
        </Sheet>
    );
}

export default CreateLeagueSheet;
