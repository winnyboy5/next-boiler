import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import "./globals.scss";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐦‍⬛</text></svg>"
        />
      </head>
      <body className="w-screen h-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow bg-[url(/light-bg.webp)] bg-cover bg-repeat overflow-auto dark:bg-[url(/dark-bg.webp)]">
            <Suspense>
              {children}
            </Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}
