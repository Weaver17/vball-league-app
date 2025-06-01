"use client";

import usePlayerContextHook from "@/hooks/use-player-context";

function Welcome() {
    const { player, isLoggedIn } = usePlayerContextHook();

    return (
        <>
            {isLoggedIn ? (
                <div className="container w-2/3  mt-12">
                    <h4 className="font-semibold">
                        Welcome back, {player.firstName}!
                    </h4>
                </div>
            ) : (
                <div className="container w-2/3  mt-12">
                    <h4 className="font-semibold">
                        Welcome! Sign in to join a team or league. Sign up to
                        set up your height, position, and level of play
                    </h4>
                </div>
            )}
        </>
    );
}

export default Welcome;
