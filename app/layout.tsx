import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFT Fishing | Under Maintenance",
  description:
    "SFT Fishing is preparing its fishing lure catalogue. Contact us by phone or email to join the waiting list.",
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
