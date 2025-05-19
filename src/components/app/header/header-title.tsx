"use client";

import { usePathname } from "next/navigation";

const HeaderTitle = () => {
    const pathname = usePathname(); // e.g. '/teams'
    const segment = pathname.split("/").filter(Boolean).pop(); // 'teams'

    const title = segment
        ? segment.charAt(0).toUpperCase() + segment.slice(1)
        : "Home";

    return <h1>{title}</h1>;
};

export default HeaderTitle;
