import { ThemeBtn } from "@/components/buttons/theme-btn";

import SignInForm from "@/components/app/auth/sign-in-form";

function SignIn() {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-4 right-4">
                <ThemeBtn />
            </div>
            <SignInForm />
        </div>
    );
}

export default SignIn;
