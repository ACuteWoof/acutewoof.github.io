import type { Metadata } from "next";
import { mono as font } from "./fonts"
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider"

export const metadata: Metadata = {
  title: "Vithushan",
  description: "Web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
