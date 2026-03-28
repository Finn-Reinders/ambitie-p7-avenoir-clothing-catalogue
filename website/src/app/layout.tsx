"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { usePathname } from "next/navigation";
import { ViewTransitions } from "next-view-transitions";
import { Session } from "inspector/promises";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>Home</title>
        </head>
        <body>
          <SessionProvider>{children}</SessionProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
