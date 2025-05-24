import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    A_DOUBLE_A,
    B_DOUBLE_B,
    BEER,
    C_DOUBLE_C,
    COED,
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
        case "A/AA":
            return A_DOUBLE_A;
        case "B/BB":
            return B_DOUBLE_B;
        case "C/CC":
            return C_DOUBLE_C;
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
