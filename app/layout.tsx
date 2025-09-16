import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "FinBank - Seu Banco Digital",
  description:
    "Banco digital inovador com conta corrente gratuita, cartão sem anuidade, investimentos e empréstimos com as melhores taxas.",
  keywords: [
    "banco digital",
    "conta corrente",
    "cartão de crédito",
    "investimentos",
    "empréstimos",
    "fintech",
  ],
  authors: [{ name: "FinBank" }],
  robots: "index, follow",
  openGraph: {
    title: "FinBank - Seu Banco Digital",
    description:
      "Banco digital inovador com soluções financeiras completas para você e sua empresa.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
