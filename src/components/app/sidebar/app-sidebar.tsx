import {
    Sidebar,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_OPTIONS } from "@/lib/constants";
import Link from "next/link";
import React from "react";

function AppSidebar() {
    return (
        <Sidebar side="left" variant="floating">
            <SidebarHeader className="font-bold text-xl border-b border-primary py-8 ">
                <Link href="/" className="hover:text-primary">
                    Vball League App
                </Link>
            </SidebarHeader>
            <SidebarGroupContent>
                <SidebarMenu className="gap-2">
                    {SIDEBAR_OPTIONS.map((option) => (
                        <SidebarMenuItem className="p-2" key={option.id}>
                            <SidebarMenuButton
                                className="hover:bg-secondary/50"
                                asChild
                            >
                                <Link href={option.url}>
                                    <option.icon />
                                    <h5>{option.name}</h5>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
            <SidebarFooter className="mt-auto mb-4 w-full border-t border-secondary cursor-pointer hover:bg-sidebar-border/50">
                <p className="mx-auto text-center py-2">User Avatar & Name</p>
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;
