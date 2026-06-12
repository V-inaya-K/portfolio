import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: {
    default: portfolioData.personal.name,
    template: `%s | ${portfolioData.personal.name}`
  },
  description: portfolioData.personal.shortIntro,
  metadataBase: new URL("https://vinayakshukla.dev"),
  openGraph: {
    title: portfolioData.personal.name,
    description: portfolioData.personal.shortIntro,
    type: "website",
    url: "https://vinayakshukla.dev",
    images: ["/og-image.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.personal.name,
    description: portfolioData.personal.shortIntro,
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
