import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Next.js PGPM",
  description: "Procedurally-Generated Pixel Matrices - Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
