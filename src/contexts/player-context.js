"use client";
import { toastSuccess } from "@/lib/toast";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";

export const PlayerContext = React.createContext();

export const PlayerContextProvider = ({ children }) => {
    const [player, setPlayer] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (data) => {
        setIsLoggedIn(true);
        setPlayer(data);
        toast("Logged in successfully", toastSuccess);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPlayer(null);
        toast("Logged out successfully", toastSuccess);
    };

    const contextValue = useMemo(
        () => ({
            player,
            setPlayer,
            isLoggedIn,
            setIsLoggedIn,
            handleLogin,
            handleLogout,
        }),
        [
            player,
            setPlayer,
            isLoggedIn,
            setIsLoggedIn,
            handleLogin,
            handleLogout,
        ]
    );

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
};
