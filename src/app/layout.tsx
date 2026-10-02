import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunal Vaishnav — UI/UX & Product Designer",
  description: "Portfolio of Kunal Vaishnav. UI/UX & Product Designer focused on human-centered digital experiences, mobile transit platforms, and design systems.",
  authors: [{ name: "Kunal Vaishnav" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#1b2118] text-[#edf2e8] antialiased selection:bg-[#9ec297]/30 selection:text-[#ffffff] min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
