"use client";
import { Form } from "@/components/ui/form";

import { UseFormReturn } from "react-hook-form";
import AuthFormTitle from "./form-components/form-title";
import AuthFormFooter from "./form-components/form-footer";
import React from "react";

function AuthForm({
    title,
    formData,
    questionText,
    linkText,
    linkPath,
    children,
}: {
    title: string;
    formData: UseFormReturn<InitialUser | PlayerSignIn>;
    questionText: string;
    linkText: string;
    linkPath: string;
    children: React.ReactNode;
}) {
    return (
        <Form {...formData}>
            <form className="bg-card py-10 px-28 rounded-lg border-2 border-border w-xl flex flex-col gap-4 shadow-xl shadow-black/30">
                <AuthFormTitle title={title} />
                {children}
                <AuthFormFooter
                    btnText={title}
                    questionText={questionText}
                    linkText={linkText}
                    linkPath={linkPath}
                />
            </form>
        </Form>
    );
}

export default AuthForm;
