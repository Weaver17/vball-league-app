"use client";
import { getPlayerByEmail } from "@/actions/actions";
import AuthForm from "@/components/app/auth/auth-form";
import SignInFormBody from "@/components/app/auth/form-components/sign-in-body";
import { ThemeBtn } from "@/components/buttons/theme-btn";
import { PlayerSignIn } from "@/components/interfaces/types";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

function SignIn() {
    const signInForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        } as PlayerSignIn,
    });

    const router = useRouter();

    async function handleSignInClick() {
        try {
            await getPlayerByEmail({
                email: signInForm.getValues("email"),
                password: signInForm.getValues("password"),
            } as PlayerSignIn);
            router.push("/");
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
                title="Sign In"
                formData={signInForm}
                questionText="Don't have an account"
                linkText="Sign Up"
                linkPath="/sign-up"
                onSubmit={handleSignInClick}
            >
                <SignInFormBody formData={signInForm} />
            </AuthForm>
        </div>
    );
}

export default SignIn;
