import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoCAD Z-Flatten Toolkit",
  description:
    "Generate and understand AutoCAD LISP routines for flattening all entity Z coordinates, including nested blocks."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
