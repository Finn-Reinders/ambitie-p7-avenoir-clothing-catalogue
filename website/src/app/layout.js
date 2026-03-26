"use client";
import "./globals.css";
import React from 'react';
import PageTransition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Home</title>
      </head>
      <body>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
        <AnimatePresence mode="wait" >
          <PageTransition key={pathname}>{children}</PageTransition>
        </AnimatePresence>
      </body>
    </html>
  );
}
