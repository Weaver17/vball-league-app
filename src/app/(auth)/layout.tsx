import AuthList from "@/components/app/auth/auth-list";
import Background from "@/components/app/background";

import React from "react";

function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="main relative w-full flex justify-between">
            <div className="w-[40%] mx-auto p-10 container justify-center items-center">
                <AuthList />
            </div>
            <Background />
            <div className="w-1/2 flex justify-center items-center">
                {children}
            </div>
        </main>
    );
}

export default AuthLayout;
