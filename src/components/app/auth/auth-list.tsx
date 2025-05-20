import { Volleyball } from "lucide-react";
import Link from "next/link";
import React from "react";

function AuthList() {
    return (
        <>
            <div className="flex  gap-2 items-center p-6 border-b border-primary">
                <Volleyball size="55" className="text-primary" />
                <h3 className="font-bold text-center">
                    <Link href="/">Vball League App</Link>
                </h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2 list-decimal font-semibold">
                <h4>For Leagues</h4>
                <h4>For Teams</h4>
                <h4>For Players</h4>
                <h4>For Fans</h4>
                <h4>For Athletes</h4>
            </ul>
        </>
    );
}

export default AuthList;
