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
  title: "Anil Chhetri - IAM & Identity Security Engineer",
  description: "AI & ML graduate with hands-on experience in SailPoint IdentityNow (ISC), IAM governance, OIDC/OAuth 2.0, Microsoft Entra ID, and building scalable identity solutions.",
  keywords: ["Anil Chhetri", "IAM", "Identity Security", "SailPoint", "IdentityNow", "Cybersecurity", "Python", "React", "Next.js", "AI"],
  authors: [{ name: "Anil Chhetri" }],
  creator: "Anil Chhetri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anilchhetri.dev",
    title: "Anil Chhetri - IAM & Identity Security Engineer",
    description: "AI & ML graduate with hands-on experience in SailPoint IdentityNow (ISC), IAM governance, OIDC/OAuth 2.0, Microsoft Entra ID, and building scalable identity solutions.",
    siteName: "Anil Chhetri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Chhetri - IAM & Identity Security Engineer",
    description: "AI & ML graduate with hands-on experience in SailPoint IdentityNow (ISC), IAM governance, OIDC/OAuth 2.0, Microsoft Entra ID, and building scalable identity solutions.",
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
