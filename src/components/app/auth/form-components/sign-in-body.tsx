import React from "react";
import AuthFormInput from "./form-input";
import AuthFormFooter from "./form-footer";
import { UseFormReturn } from "react-hook-form";

function SignInFormBody({
    formData,
}: {
    formData: UseFormReturn<InitialUser | PlayerSignIn>;
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
