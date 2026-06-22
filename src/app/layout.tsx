import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danielle Corrêa | Corretora de Imóveis de Alto Padrão em Belém",
  description: "Encontre o imóvel ideal em Belém e Região Metropolitana. Danielle Corrêa (CRECI 12194) - Atendimento personalizado no mercado imobiliário de luxo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoniModa.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
