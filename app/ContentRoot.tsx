'use client';

import '@radix-ui/themes/styles.css';
import './theme-config.css';
import "./globals.css";
import { Inter } from "next/font/google";
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from "@/app/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export default function ContentRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Theme className={inter.variable} accentColor="cyan">
        <NavBar />
        <main className="p-5">{children}</main>
      </Theme>
  );
}
