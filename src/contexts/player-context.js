"use client";
import React, { useMemo, useState } from "react";

export const PlayerContext = React.createContext();

export const PlayerContextProvider = ({ children }) => {
    const [player, setPlayer] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (data) => {
        setIsLoggedIn(true);
        setPlayer(data);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPlayer(null);
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
