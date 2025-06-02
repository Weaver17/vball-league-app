import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    A,
    B,
    BEER,
    COED,
    DOUBLE_A,
    DOUBLE_B,
    MENS,
    OPEN,
    REVCO,
    WOMENS,
} from "./hover-card-text";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getLevelOfPlay = (level: string) => {
    switch (level) {
        case "Open":
            return OPEN;
        case "A":
            return A;
        case "AA":
            return DOUBLE_A;
        case "B":
            return B;
        case "BB":
            return DOUBLE_B;
        case "Beer":
            return BEER;
        default:
            return null;
    }
};

export const getPlayerType = (type: string) => {
    switch (type) {
        case "Men's":
            return MENS;
        case "Women's":
            return WOMENS;
        case "Co-ed":
            return COED;
        case "Rev-co":
            return REVCO;
        default:
            return null;
    }
};
