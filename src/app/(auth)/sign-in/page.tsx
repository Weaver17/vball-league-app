"use client";
import AuthForm from "@/components/app/auth/auth-form";
import SignInFormBody from "@/components/app/auth/form-components/sign-in-body";
import { ThemeBtn } from "@/components/buttons/theme-btn";

import { useForm } from "react-hook-form";

function SignIn() {
    const signInForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        } as InitialUser | PlayerSignIn,
    });

    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-4 right-4">
                <ThemeBtn />
            </div>
            <AuthForm
                title="Sign In"
                formData={signInForm}
                questionText="Don't have an account"
                linkText="Sign Up"
                linkPath="/sign-up"
            >
                <SignInFormBody formData={signInForm} />
            </AuthForm>
        </div>
    );
}

export default SignIn;
