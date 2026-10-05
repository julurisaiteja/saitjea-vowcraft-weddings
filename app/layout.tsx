import type { Metadata } from "next";
import { CartProvider } from "@/components/CartProvider";
import { Shell } from "@/components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vowcraft — Romantic Script / Handwritten",
  description: "Wedding packages composed with calm, craft, and clarity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Lora:wght@400;500;600;700&family=Pinyon+Script&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <Shell>{children}</Shell>
        </CartProvider>
      </body>
    </html>
  );
}
