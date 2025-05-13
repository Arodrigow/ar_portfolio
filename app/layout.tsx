import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./structure/navbar/navbar";

export const metadata: Metadata = {
  title: "Portfolio - André Maciel",
  description: "Portfolio de André Maciel, desenvolvedor web e IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Navbar></Navbar>
      <body
      >
        {children}
      </body>
    </html>
  );
}
