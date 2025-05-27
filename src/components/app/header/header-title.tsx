"use client";

import { usePathname } from "next/navigation";

const HeaderTitle = () => {
    const pathname = usePathname();

    const segment = pathname.split("/");

    let filteredSegment = segment.filter(Boolean).pop();

    if (segment.length > 2) {
        filteredSegment = " ";
    }

    const title = filteredSegment
        ? filteredSegment.charAt(0).toUpperCase() + filteredSegment.slice(1)
        : "Home";

    return <h1>{title}</h1>;
};

export default HeaderTitle;
