import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/assets/styles/globals.css";
import React from "react";
import {APP_DESCRIPTION, APP_NAME, SERVER_URL} from "@/lib/constants";
import {ThemeProvider} from "next-themes";

const inter = Inter({
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: {
        template: `${APP_NAME} | %s`,
        default: `${APP_NAME}`,
    },
    description: `${APP_DESCRIPTION}`,
    metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} antialiased`}
            suppressHydrationWarning={true}
        >
        <ThemeProvider
        attribute={`class`}
        defaultTheme={`light`}
        enableSystem={true}
        disableTransitionOnChange={true}
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
