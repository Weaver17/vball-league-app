"use client";
import { getPlayer } from "@/actions/actions";
import {
    Sidebar,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import usePlayerContext from "@/hooks/use-player-context";
import { SIDEBAR_OPTIONS } from "@/lib/constants";
import Link from "next/link";
import React, { useEffect } from "react";

function AppSidebar() {
    const { isLoggedIn, player, setPlayer, setIsLoggedIn } = usePlayerContext();

    useEffect(() => {
        const checkForCurrentPlayer = async () => {
            const currentPlayer = await getPlayer();
            if (currentPlayer) {
                setPlayer(currentPlayer);
                setIsLoggedIn(true);
            }
        };
        checkForCurrentPlayer();
    }, []);

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
                {isLoggedIn ? (
                    <p className="mx-auto text-center py-2">
                        <Link href={`players/${player.id}`}>
                            {player.firstName} {player.lastName}
                        </Link>
                    </p>
                ) : (
                    <p className="mx-auto text-center py-2">
                        User Avatar & Name
                    </p>
                )}
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;
