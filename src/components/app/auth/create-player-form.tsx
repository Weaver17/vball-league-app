"use client";
import { Form } from "@/components/ui/form";

import { useForm, UseFormReturn } from "react-hook-form";
import AuthFormTitle from "./form-components/form-title";
import AuthFormFooter from "./form-components/form-footer";
import React from "react";
import { InitialUser, PlayerSignIn } from "@/components/interfaces/types";
import AuthFormInput from "./form-components/form-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createAnInitialUser } from "@/actions/actions";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
    BEACH_POSITIONS,
    COURT_TYPES,
    CREATE_PLAYER_GENDERS,
    CREATE_PLAYER_HEIGHTS,
    INDOOR_POSITIONS,
    LEVELS_OF_PLAY,
} from "@/lib/constants";
import AuthFormDropdown from "./form-components/form-dropdown";

function CreatePlayerForm() {
    const createPlayerForm = useForm({
        defaultValues: {
            mainIndoorPosition: "",
            secondIndoorPosition: "",
            beachPosition: "",
            height: "",
            level: "",
            gender: "",
            preferredCourtType: "",
        } as Player,
    });

    const router = useRouter();

    // async function onSignUpSubmit() {
    //     try {
    //         await createAnInitialUser({
    //             email: signUpForm.getValues("email"),
    //             firstName: signUpForm.getValues("firstName"),
    //             lastName: signUpForm.getValues("lastName"),
    //             password: signUpForm.getValues("password"),
    //         } as InitialUser);
    //         router.push("/sign-up/create-player");
    //     } catch (e) {
    //         console.log(e);
    //         throw e;
    //     }
    // }
    return (
        <Form {...createPlayerForm}>
            <form
                // action={onSignUpSubmit}
                className="bg-card py-10 px-28 rounded-lg border-2 border-border w-xl flex flex-col gap-4 shadow-xl shadow-black/30"
            >
                {/* <AuthFormTitle title="Sign Up" /> */}
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Preferred Court Type"
                    array={COURT_TYPES}
                />
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Main Position"
                    array={INDOOR_POSITIONS}
                />
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Second Position"
                    array={INDOOR_POSITIONS}
                />
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Beach Position"
                    array={BEACH_POSITIONS}
                />
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Level"
                    array={LEVELS_OF_PLAY}
                />
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Height"
                    array={CREATE_PLAYER_HEIGHTS}
                />
                <AuthFormDropdown
                    formControl={createPlayerForm.control}
                    title="Gender"
                    array={CREATE_PLAYER_GENDERS}
                />
                <Button className="cursor-pointer">Create Player</Button>
            </form>
        </Form>
    );
}

export default CreatePlayerForm;
