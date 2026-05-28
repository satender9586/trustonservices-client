import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingContactActions from "./compontens/FloatingContactActions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrustonServices | Home Service Platform",
  description:
    "Book trusted home services with clear pricing, verified professionals, convenient slots, and customer-friendly service categories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingContactActions />
      </body>
    </html>
  );
}
