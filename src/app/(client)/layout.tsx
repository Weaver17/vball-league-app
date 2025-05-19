import { ThemeBtn } from "@/components/buttons/theme-btn";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="main relative w-full">
            <ThemeBtn />
            {children}
        </main>
    );
}

export default ClientLayout;
