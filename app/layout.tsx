import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFT Fishing | Model Alfa",
  description:
    "SFT Fishing katalog ribolovnih varalica. Pogledajte Model Alfa, dostupne dimenzije i galeriju dekora.",
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
