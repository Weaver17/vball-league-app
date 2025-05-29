"use client";
import { PlayerContext } from "@/contexts/player-context";
import { useContext } from "react";

function usePlayerContextHook() {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("PlayerContext Provider not found!");
    }
    return context;
}

export default usePlayerContextHook;
