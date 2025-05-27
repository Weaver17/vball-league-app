"use client";

import { createAnInitialUser } from "@/actions/actions";
import AuthForm from "@/components/app/auth/auth-form";
import SignUpFormBody from "@/components/app/auth/form-components/sign-up-body";
import { ThemeBtn } from "@/components/buttons/theme-btn";
import { InitialUser } from "@/components/interfaces/types";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

function RegisterPage() {
    const signUpForm = useForm({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        } as InitialUser,
    });

    const router = useRouter();

    async function handleSignUpClick() {
        try {
            await createAnInitialUser(signUpForm.getValues());
            console.log(signUpForm.getValues());
            router.push("/sign-up/create-player");
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-4 right-4">
                <ThemeBtn />
            </div>
            <AuthForm
                title="Sign Up"
                formData={signUpForm}
                questionText="Already have an account"
                linkText="Sign In"
                linkPath="/sign-in"
                onSubmit={handleSignUpClick}
            >
                <SignUpFormBody formData={signUpForm} />
            </AuthForm>
        </div>
    );
}

export default RegisterPage;
