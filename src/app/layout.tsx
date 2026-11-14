import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteMetadata } from "@/content/metadata";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  appleWebApp: {
    title: "Luma",
  },
};

export const viewport: Viewport = { themeColor: "#f9f8f3" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteMetadata.locale} className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
