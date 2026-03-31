import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindfulChat — Your Friendly AI Companion",
  description:
    "A warm, empathetic AI companion here to listen, offer perspective, and help you navigate your day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#f7f3ed]">{children}</body>
    </html>
  );
}
