import MySidebar from "@/components/app/sidebar/mySidebar";
import { ThemeBtn } from "@/components/buttons/themeBtn";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="main relative">
            <ThemeBtn />
            <MySidebar />
            {children}
        </main>
    );
}

export default ClientLayout;
