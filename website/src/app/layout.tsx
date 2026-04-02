import React, { ReactNode } from "react";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import SessionWrapper from "./SessionWrapper";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>Home</title>
        </head>
        <body>
          <SessionWrapper>{children}</SessionWrapper>
          <div id="portal"></div>
        </body>
      </html>
    </ViewTransitions>
  );
}
