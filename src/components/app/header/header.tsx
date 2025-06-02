"use client";
import HeaderBtn from "@/components/buttons/header-btn";
import { ThemeBtn } from "@/components/buttons/theme-btn";
import { Volleyball } from "lucide-react";
import React from "react";
import Link from "next/link";
import usePlayerContextHook from "@/hooks/use-player-context";
import { deleteCurrentSession } from "@/actions/actions";

import LogoutModal from "@/components/app/modals/logout-modal";
import CreateTeamSheet from "../create/create-team";
import CreateLeagueSheet from "../create/create-league";

function Header() {
    const { isLoggedIn, handleLogout, player } = usePlayerContextHook();

    const onLogoutClick = () => {
        handleLogout();
        deleteCurrentSession();
    };

    return (
        <header className="flex justify-between items-center pt-4 px-8 relative">
            <div>
                <Link href="/">
                    <Volleyball
                        size="52"
                        className="text-primary hover:animate-spin hover:[animation-duration:0.4s] hover:[animation-timing-function:linear]   "
                    />
                </Link>
            </div>

            <div className="flex gap-4">
                {isLoggedIn ? (
                    <>
                        <CreateTeamSheet />
                        <CreateLeagueSheet />
                        <LogoutModal onLogoutClick={onLogoutClick} />
                    </>
                ) : (
                    <>
                        <HeaderBtn
                            text="Sign In"
                            href="/sign-in"
                            bgColor="bg-primary"
                        />
                        <HeaderBtn
                            text="Sign Up"
                            href="/sign-up"
                            bgColor="bg-muted"
                        />
                    </>
                )}

                <ThemeBtn />
            </div>
        </header>
    );
}

export default Header;
