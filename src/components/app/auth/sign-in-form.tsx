"use client";
import { Form } from "@/components/ui/form";

import { useForm, UseFormReturn } from "react-hook-form";
import FormTitle from "./form-components/form-title";
import FormFooter from "./form-components/form-footer";
import React from "react";
import { PlayerSignIn } from "@/interfaces/types";
import FormInput from "./form-components/form-input";
import { getPlayerByEmail } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { title } from "process";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import usePlayerContext from "@/hooks/use-player-context";

function SignInForm() {
    const signInForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        } as PlayerSignIn,
    });

    const router = useRouter();

    const { handleLogin } = usePlayerContext();

    async function onSignInSubmit() {
        try {
            await getPlayerByEmail({
                email: signInForm.getValues("email"),
                password: signInForm.getValues("password"),
            } as PlayerSignIn).then((playerData) => {
                handleLogin(playerData);
            });

            router.push("/");
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    return (
        <Form {...signInForm}>
            <form
                action={onSignInSubmit}
                className="bg-card py-10 px-28 rounded-lg border-2 border-border w-xl flex flex-col gap-4 shadow-xl shadow-black/30"
            >
                <FormTitle title="Sign In" />
                <FormInput
                    formControl={signInForm.control}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="BornSetter@vball.com"
                    description="Enter your email"
                />

                <FormInput
                    formControl={signInForm.control}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder=""
                    description="Enter your password"
                />
                <FormFooter
                    btnText="Sign In"
                    questionText="Don't have an account?"
                    linkText="Sign Up"
                    linkPath="/sign-up"
                />
            </form>
        </Form>
    );
}

export default SignInForm;
