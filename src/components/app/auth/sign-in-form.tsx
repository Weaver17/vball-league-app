"use client";
import { Form } from "@/components/ui/form";

import { useForm, UseFormReturn } from "react-hook-form";
import AuthFormTitle from "./form-components/form-title";
import AuthFormFooter from "./form-components/form-footer";
import React from "react";
import { InitialUser, PlayerSignIn } from "@/components/interfaces/types";
import AuthFormInput from "./form-components/form-input";
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

    const { setPlayer, setIsLoggedIn } = usePlayerContext();

    async function onSignInSubmit() {
        try {
            await getPlayerByEmail({
                email: signInForm.getValues("email"),
                password: signInForm.getValues("password"),
            } as PlayerSignIn).then((playerData) => {
                setPlayer(playerData);
                setIsLoggedIn(true);
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
                <AuthFormTitle title="Sign In" />
                <AuthFormInput
                    formControl={signInForm.control}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="BornSetter@vball.com"
                    description="Enter your email"
                />

                <AuthFormInput
                    formControl={signInForm.control}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder=""
                    description="Enter your password"
                />
                <Button className="cursor-pointer">Sign In</Button>
                <p className="text-sm! text-center text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                        className="text-primary text-sm underline underline-offset-2 hover:text-primary/50"
                        href="/sign-up"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </Form>
    );
}

export default SignInForm;
