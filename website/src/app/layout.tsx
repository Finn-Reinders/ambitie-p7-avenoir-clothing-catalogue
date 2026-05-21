import React, { ReactNode } from "react";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import SessionWrapper from "./SessionWrapper";
import '../../public/Fonts/WEB/css/satoshi.css';
import PresenceProvider from "./providers/PresenceProvider";

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
            {children}
            {modal}
        </body>
      </html>
    </ViewTransitions>
  );
}
