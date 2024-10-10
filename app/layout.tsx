import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const intro = localFont({
  src: [
    {
      path: "../assets/fonts/Intro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Intro-Light.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Intro-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-intro",
});

const introBook = localFont({
  src: [
    {
      path: "../assets/fonts/Intro-Book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Intro-Book-Italic.woff",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-intro-book",
});

export const metadata: Metadata = {
  title: "Whoosh",
  description: "Package delivery service.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${intro.variable} ${introBook.variable}`}>
        {children}
      </body>
    </html>
  );
}
