import React from "react";
import AuthFormInput from "./form-input";
import { UseFormReturn } from "react-hook-form";
import { InitialUser } from "@/components/interfaces/types";

function SignUpFormBody({
    formData,
}: {
    formData: UseFormReturn<InitialUser>;
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
                name="firstName"
                label="First Name"
                type="text"
                placeholder="Att"
                description="Enter your first name"
            />
            <AuthFormInput
                formControl={formData.control}
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Manderson"
                description="Enter your last name"
            />
            <AuthFormInput
                formControl={formData.control}
                name="password"
                label="Password"
                type="password"
                placeholder=""
                description="Password must be o9743658w7 characters long"
            />
        </>
    );
}

export default SignUpFormBody;
