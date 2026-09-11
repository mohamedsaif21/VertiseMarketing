import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Vertise Agency — Digital Marketing, Web Development & Branding Studio",
  description:
    "Vertise is a digital agency building high-converting websites, brand identities, SEO optimization, and digital marketing strategies for growing businesses.",
  keywords: [
    "Digital Marketing Agency",
    "Web Development",
    "Branding Agency",
    "SEO Optimization",
    "Coimbatore Web Design",
    "E-Commerce Solutions",
    "Mobile App Development",
  ],
  authors: [{ name: "Vertise Digital Agency" }],
  metadataBase: new URL("https://vertisemarketing.com"),
  openGraph: {
    title: "Vertise Agency — Digital Marketing, Web Development & Branding",
    description:
      "We build digital experiences that help businesses grow. From branding and custom websites to SEO and performance marketing.",
    url: "https://vertisemarketing.com",
    siteName: "Vertise Digital Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertise Agency — Digital Marketing & Web Development Studio",
    description:
      "Digital marketing, branding, custom websites, and mobile apps built for scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vertise Digital Agency",
  image: "https://vertisemarketing.com/og-image.jpg",
  description: "Digital marketing, web design, SEO, and digital solution agency.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cheran Ma Nagar",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  telephone: "+91-87781-47182",
  email: "vertice.digitalmanagement@gmail.com",
  url: "https://vertisemarketing.com",
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
