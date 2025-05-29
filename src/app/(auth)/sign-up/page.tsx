import { ThemeBtn } from "@/components/buttons/theme-btn";

import SignUpForm from "@/components/app/auth/sign-up-form";

function RegisterPage() {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-4 right-4">
                <ThemeBtn />
            </div>
            <SignUpForm />
        </div>
    );
}

export default RegisterPage;
