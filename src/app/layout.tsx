import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "FPV GUIDE",
  description: "Your journey into FPV starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}