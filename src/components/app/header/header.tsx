"use client";
import HeaderBtn from "@/components/buttons/header-btn";
import { ThemeBtn } from "@/components/buttons/theme-btn";
import { Volleyball } from "lucide-react";
import React from "react";
import HeaderTitle from "./header-title";
import Link from "next/link";
import usePlayerContextHook from "@/hooks/use-player-context";
import { Button } from "@/components/ui/button";
import { deleteCurrentSession } from "@/actions/actions";

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
            {/* <div className="absolute top-3 left-[35%]">
                <HeaderTitle />
            </div> */}
            <div className="flex gap-4">
                {isLoggedIn ? (
                    <>
                        <HeaderBtn
                            text="My Teams"
                            href={`/players/${player.id}/teams`}
                            bgColor="bg-primary"
                        />
                        <Button
                            className="bg-muted cursor-pointer"
                            onClick={onLogoutClick}
                        >
                            Sign Out
                        </Button>
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
