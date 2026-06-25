import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFT Fishing | Sajt je u pripremi",
  description:
    "SFT Fishing priprema katalog ribolovnih varalica. Kontaktirajte nas telefonom ili emailom i pridružite se listi čekanja.",
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
