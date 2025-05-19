import type { Metadata } from "next";
import { Geist as fontSans, Geist_Mono as fontMono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
                className={`${sansFont.variable} ${monoFont.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
