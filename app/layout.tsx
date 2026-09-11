import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

// Heavy geometric-rounded display face (closest free match to Aeonik/Clash Display)
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

// Lighter grotesk for UI/body text
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Your Agency — Websites People Trust",
  description: "Digital marketing & web design studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
