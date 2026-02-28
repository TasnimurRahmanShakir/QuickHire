import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickHire | Find your dream job",
  description: "QuickHire is the fastest way to find and apply for jobs. Browse thousands of top job listings from companies worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${epilogue.variable} antialiased font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
