import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chadash Labs // Mbiarrambang",
  description: "Building systems for Africa and DIYers all over the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
