import type { Metadata } from "next";
import "../assets/styles/globals.scss";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Free Rss Feeds, RSS Feed Generator, Create RSS feeds from URL",
  description: "Generate RSS feeds from almost any source and embed news feeds to your html website using JS or iframe widgets.",
  keywords: ['RSS', 'Feeds', 'news', 'blogs', 'updates', 'information', 'articles', 'latest news', 'Rss Feeds', 'Free Rss Feeds', 'RSS Feed Generator', 'Create RSS feeds from URL'],
  authors: [{ name: 'Rss Feeds' }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col size-full bg-gray-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
