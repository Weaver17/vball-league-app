import Background from "@/components/app/background";
import Header from "@/components/app/header/header";
import AppSidebar from "@/components/app/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="main relative w-full">
                <Header />
                {children}
                <Background />
            </main>
        </SidebarProvider>
    );
}

export default ClientLayout;
