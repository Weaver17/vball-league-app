import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function FormFooter({
    btnText,
    questionText,
    linkText,
    linkPath,
}: {
    btnText: string;
    questionText: string;
    linkText: string;
    linkPath: string;
}) {
    return (
        <>
            <Button className="cursor-pointer">{btnText}</Button>
            <p className="text-sm! text-center text-muted-foreground">
                {questionText}{" "}
                <Link
                    className="text-primary text-sm underline underline-offset-2 hover:text-primary/50"
                    href={linkPath}
                >
                    {linkText}
                </Link>
            </p>
        </>
    );
}

export default FormFooter;
