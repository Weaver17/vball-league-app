import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
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
        <Sidebar>
            <SidebarHeader className=" font-bold text-xl border-b border-primary py-8 hover:text-primary">
                <Link href="/">Vball League App</Link>
            </SidebarHeader>
            <SidebarGroupContent>
                <SidebarMenu className="gap-2">
                    {SIDEBAR_OPTIONS.map((option) => (
                        <SidebarMenuItem className="p-2" key={option.id}>
                            <SidebarMenuButton
                                className="hover:bg-muted/75"
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
            <SidebarFooter className="mt-auto mb-4 mx-auto">
                User Avatar & Name
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;
