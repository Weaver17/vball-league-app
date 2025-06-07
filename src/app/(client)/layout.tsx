import Background from "@/components/app/background";
import Header from "@/components/app/header/header";
import AppSidebar from "@/components/app/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <main className="main relative w-full">
                <AppSidebar />
                <Header />
                {children}
                <Background />
            </main>
        </SidebarProvider>
    );
}

export default ClientLayout;
