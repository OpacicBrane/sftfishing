import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFT Fishing | Varalice",
  description: "SFT Fishing premium ribolovne varalice, modeli i kontakt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
