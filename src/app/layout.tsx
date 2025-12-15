import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klarelo | Digital Alchemy for Brands",
  description:
    "We redefine communication, sculpting narratives that resonate. Klarelo is where your message transforms into an impactful legacy.",
  keywords: [
    "Digital Agency",
    "Creative Communications",
    "Brand Strategy",
    "Web Design",
    "Klarelo",
    "Nairobi",
    "public relations",
    "crisis communication",
  ],
  authors: [{ name: "Klarelo Communications" }],
  creator: "Klarelo Communications",
  publisher: "Klarelo Communications",
  metadataBase: new URL("https://klarelocommunications.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://klarelocommunications.com/",
    title: "Klarelo Communications - Crafting Communication Excellence",
    description:
      "Klarelo Communications specializes in corporate branding, media production, and communication strategies. Let us help craft your brand's story.",
    siteName: "Klarelo Communications",
    images: [
      {
        url: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
        width: 1200,
        height: 630,
        alt: "Klarelo Communications Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klarelo Communications - Crafting Communication Excellence",
    description:
      "Klarelo Communications specializes in corporate branding, media production, and communication strategies. Let us help craft your brand's story.",
    images: [
      "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
    ],
  },
  icons: {
    icon: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
    apple:
      "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Klarelo Communications",
              url: "https://klarelocommunications.com/",
              logo: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+254 703 406 865",
                  contactType: "customer service",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/klarelo-communications/",
                "https://www.instagram.com/ruth_mboya/",
                "https://www.facebook.com/mboyaruth?mibextid=ZbWKwL",
              ],
              description:
                "Explore Klarelo Communications. Find ways to craft your team's communication possibilities. Unleash your Team Potential Through Effective Communication",
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
