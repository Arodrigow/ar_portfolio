import type { Metadata } from "next";
import "./globals.css";

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
      <body
      >
        {children}
      </body>
    </html>
  );
}
