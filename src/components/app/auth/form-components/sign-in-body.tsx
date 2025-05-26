import React from "react";
import AuthFormInput from "./form-input";
import { UseFormReturn } from "react-hook-form";
import { PlayerSignIn } from "@/components/interfaces/types";

function SignInFormBody({
    formData,
}: {
    formData: UseFormReturn<PlayerSignIn>;
}) {
    return (
        <>
            <AuthFormInput
                formControl={formData.control}
                name="email"
                label="Email"
                type="email"
                placeholder="BornSetter@vball.com"
                description="Enter your email"
            />

            <AuthFormInput
                formControl={formData.control}
                name="password"
                label="Password"
                type="password"
                placeholder=""
                description="Enter your password"
            />
        </>
    );
}

export default SignInFormBody;
