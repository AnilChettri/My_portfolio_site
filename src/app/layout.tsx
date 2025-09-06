import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anil Chhetri - ML Engineer & AI Developer",
  description: "Building innovative AI solutions and machine learning applications. Passionate about data science, artificial intelligence, and creating impactful technology.",
  keywords: ["Anil Chhetri", "Machine Learning", "AI Developer", "Data Science", "Python", "Artificial Intelligence", "ML Engineer"],
  authors: [{ name: "Anil Chhetri" }],
  creator: "Anil Chhetri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anilchhetri.dev",
    title: "Anil Chhetri - ML Engineer & AI Developer",
    description: "Building innovative AI solutions and machine learning applications. Passionate about data science and technology.",
    siteName: "Anil Chhetri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Chhetri - ML Engineer & AI Developer",
    description: "Building innovative AI solutions and machine learning applications. Passionate about data science and technology.",
    creator: "@anilchhetri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          "min-h-screen font-sans antialiased transition-colors duration-300"
        )}
      >
        <ThemeProvider>
          <StructuredData />
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="animated-gradient min-h-screen">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
