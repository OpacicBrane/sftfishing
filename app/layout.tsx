import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFT Fishing | Modeli Alfa i Zed",
  description:
    "SFT Fishing katalog ribolovnih varalica. Pogledajte modele Alfa i Zed, dostupne dimenzije i galerije dekora.",
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
