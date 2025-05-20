import HeaderBtn from "@/components/buttons/header-btn";
import { ThemeBtn } from "@/components/buttons/theme-btn";
import { Volleyball } from "lucide-react";
import React from "react";
import HeaderTitle from "./header-title";
import Link from "next/link";

async function Header() {
    return (
        <header className="flex justify-between items-center pt-4 px-8">
            <div>
                <Link href="/">
                    <Volleyball
                        size="52"
                        className="text-primary hover:rotate-360 ease-linear duration-1000"
                    />
                </Link>
            </div>
            <div>
                <HeaderTitle />
            </div>
            <div className="flex gap-4">
                <HeaderBtn
                    text="Sign In"
                    href="/sign-in"
                    bgColor="bg-primary"
                />
                <HeaderBtn text="Sign Up" href="/sign-up" bgColor="bg-muted" />
                <ThemeBtn />
            </div>
        </header>
    );
}

export default Header;
