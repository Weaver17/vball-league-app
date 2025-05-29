import type { Metadata } from "next";
import {
    Red_Hat_Text as fontSans,
    Red_Hat_Mono as fontMono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
    PlayerContext,
    PlayerContextProvider,
} from "@/contexts/player-context";

const sansFont = fontSans({
    variable: "--font-font-sans",
    subsets: ["latin"],
});

const monoFont = fontMono({
    variable: "--font-font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vball League App",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${sansFont.variable} ${monoFont.variable} antialiased font-sans max-w-[1480px] mx-auto `}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <PlayerContextProvider>{children}</PlayerContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
