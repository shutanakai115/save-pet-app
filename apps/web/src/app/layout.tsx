import type { Metadata, Viewport } from "next";

import { Nunito, Zen_Kaku_Gothic_New } from "next/font/google";

import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saving Pet App",
  description: "楽しく続ける貯金アプリ",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#fffdf8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenKakuGothicNew.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
