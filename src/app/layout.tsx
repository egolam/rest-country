import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getQueryClient } from "@/helpers/getQueryClient";
import Header from "@/components/header";
import Providers from "@/components/QueryProvider";

const queryClient = getQueryClient();

const nuni = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rest Country APP",
  description: "A challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nuni.className} antialiased min-h-dvh flex flex-col`}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Header />
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
              {children}
            </HydrationBoundary>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
