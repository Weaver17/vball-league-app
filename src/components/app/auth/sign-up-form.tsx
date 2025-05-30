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

function SignUpForm() {
    const signUpForm = useForm({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        } as InitialUser,
    });

    const router = useRouter();

    async function onSignUpSubmit() {
        try {
            await createAnInitialUser({
                email: signUpForm.getValues("email"),
                firstName: signUpForm.getValues("firstName"),
                lastName: signUpForm.getValues("lastName"),
                password: signUpForm.getValues("password"),
            } as InitialUser);
            router.push("/sign-up/create-player");
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
                <AuthFormTitle title="Sign Up" />
                <AuthFormInput
                    formControl={signUpForm.control}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="BornSetter@vball.com"
                    description="Enter your email"
                />
                <AuthFormInput
                    formControl={signUpForm.control}
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Att"
                    description="Enter your first name"
                />
                <AuthFormInput
                    formControl={signUpForm.control}
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Manderson"
                    description="Enter your last name"
                />
                <AuthFormInput
                    formControl={signUpForm.control}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder=""
                    description="Password must be o9743658w7 characters long"
                />
                <Button className="cursor-pointer">Sign Up</Button>
                <p className="text-sm! text-center text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        className="text-primary text-sm underline underline-offset-2 hover:text-primary/50"
                        href="/sign-in"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </Form>
    );
}

export default SignUpForm;
