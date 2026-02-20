import type { Metadata, Viewport } from "next";

import { Inter, M_PLUS_Rounded_1c } from "next/font/google";

import "./globals.css";

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded-1c",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="ja">
      <body className={`${mPlusRounded1c.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
