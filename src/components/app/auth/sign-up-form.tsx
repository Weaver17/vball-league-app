"use client";
import { Form } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import FormTitle from "./form-components/form-title";
import FormFooter from "./form-components/form-footer";
import React from "react";
import FormInput from "./form-components/form-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPlayer } from "@/actions/actions";
import {
    COURT_TYPES,
    INDOOR_POSITIONS,
    BEACH_POSITIONS,
    LEVELS_OF_PLAY,
    CREATE_PLAYER_HEIGHTS,
    CREATE_PLAYER_GENDERS,
} from "@/lib/constants";
import usePlayerContext from "@/hooks/use-player-context";
import FormSelect from "./form-components/form-select";

function SignUpForm() {
    const signUpForm = useForm({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            mainIndoorPosition: "",
            secondIndoorPosition: "",
            beachPosition: "",
            height: "",
            level: "",
            gender: "",
            preferredCourtType: "",
        },
    });

    const router = useRouter();

    const { setPlayer, setIsLoggedIn } = usePlayerContext();

    async function onSignUpSubmit() {
        try {
            await createPlayer({
                email: signUpForm.getValues("email"),
                firstName: signUpForm.getValues("firstName"),
                lastName: signUpForm.getValues("lastName"),
                password: signUpForm.getValues("password"),
                mainIndoorPosition: signUpForm.getValues("mainIndoorPosition"),
                secondIndoorPosition: signUpForm.getValues(
                    "secondIndoorPosition"
                ),
                beachPosition: signUpForm.getValues("beachPosition"),
                height: signUpForm.getValues("height"),
                level: signUpForm.getValues("level"),
                gender: signUpForm.getValues("gender"),
                preferredCourtType: signUpForm.getValues("preferredCourtType"),
            }).then((player) => {
                setPlayer(player);
                setIsLoggedIn(true);
                router.push("/");
            });
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    return (
        <Form {...signUpForm}>
            <form
                action={onSignUpSubmit}
                className="bg-card py-10 px-28 rounded-lg border-2 border-border w-xl flex flex-col gap-4 shadow-xl shadow-black/30"
            >
                <FormTitle title="Sign Up" />
                <FormInput
                    formControl={signUpForm.control}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="BornSetter@vball.com"
                    description="Enter your email"
                />
                <FormInput
                    formControl={signUpForm.control}
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Att"
                    description="Enter your first name"
                />
                <FormInput
                    formControl={signUpForm.control}
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Manderson"
                    description="Enter your last name"
                />
                <FormInput
                    formControl={signUpForm.control}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder=""
                    description="Password must be o9743658w7 characters long"
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormSelect
                        name="mainIndoorPosition"
                        formControl={signUpForm.control}
                        title="Main Position"
                        array={INDOOR_POSITIONS}
                    />
                    <FormSelect
                        name="secondIndoorPosition"
                        formControl={signUpForm.control}
                        title="Second Position"
                        array={INDOOR_POSITIONS}
                    />
                    <FormSelect
                        name="beachPosition"
                        formControl={signUpForm.control}
                        title="Beach Position"
                        array={BEACH_POSITIONS}
                    />
                    <FormSelect
                        name="level"
                        formControl={signUpForm.control}
                        title="Level"
                        array={LEVELS_OF_PLAY}
                    />
                    <FormSelect
                        name="height"
                        formControl={signUpForm.control}
                        title="Height"
                        array={CREATE_PLAYER_HEIGHTS}
                    />
                    <FormSelect
                        name="gender"
                        formControl={signUpForm.control}
                        title="Gender"
                        array={CREATE_PLAYER_GENDERS}
                    />
                    <FormSelect
                        name="preferredCourtType"
                        formControl={signUpForm.control}
                        title="Preferred Court Type"
                        array={COURT_TYPES}
                    />
                </div>

                <FormFooter
                    btnText="Sign Up"
                    questionText="Already have an account?"
                    linkText="Sign In"
                    linkPath="/sign-in"
                />
            </form>
        </Form>
    );
}

export default SignUpForm;
