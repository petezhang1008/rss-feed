import type { Metadata } from "next";
import localFont from "next/font/local";
import "./assets/styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Free Rss Feeds, RSS Feed Generator, Create RSS feeds from URL",
  description: "Generate RSS feeds from almost any source and embed news feeds to your html website using JS or iframe widgets.",
  keywords: ['RSS', 'Feeds', 'news', 'blogs', 'updates', 'information', 'articles', 'latest news', 'Rss Feeds', 'Free Rss Feeds', 'RSS Feed Generator', 'Create RSS feeds from URL'],
  authors: [{ name: 'Rss Feeds', url: 'https://rss-feed-livid.vercel.app/' }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col size-full bg-gray-50`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
