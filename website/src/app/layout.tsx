"use client";
import React, { ReactNode } from "react";
import "./globals.css";
import PageTransition from "../components/Page";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ViewTransitions } from "next-view-transitions";

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
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
