import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeaderBtn({
    bgColor,
    text,
    href,
}: {
    bgColor: string;
    text: string;
    href: string;
}) {
    return (
        <Button className={`${bgColor}`} asChild>
            <Link href={href}>{text}</Link>
        </Button>
    );
}

export default HeaderBtn;
