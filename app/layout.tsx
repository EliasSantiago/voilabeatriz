import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "voila Beatriz | Ativo Criativo",
  description:
    "Landing page premium para ativação criativa, posicionamento e direção estratégica de comunicação."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
