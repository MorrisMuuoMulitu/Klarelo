import type { Metadata } from "next";
import { Syne, Space_Grotesk, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Klarelo Communications - Digital Alchemy for Brands",
    template: "%s | Klarelo Communications",
  },
  description:
    "We redefine communication, sculpting narratives that resonate. Klarelo is where your message transforms into an impactful legacy. Leading digital agency in Nairobi specializing in creative communications, brand strategy, and PR solutions.",
  keywords: [
    "Digital Agency",
    "Creative Communications",
    "Brand Strategy",
    "Web Design",
    "Public Relations",
    "Crisis Communication",
    "Media Production",
    "Corporate Branding",
    "Communication Strategy",
    "Nairobi",
    "Kenya",
    "Klarelo",
    "Digital Marketing",
    "PR Agency",
  ],
  authors: [{ name: "Klarelo Communications" }],
  creator: "Klarelo Communications",
  publisher: "Klarelo Communications",
  metadataBase: new URL("https://www.klarelocommunications.com/"),
  alternates: {
    canonical: "https://www.klarelocommunications.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.klarelocommunications.com/",
    title: "Klarelo Communications - Digital Alchemy for Brands",
    description:
      "We redefine communication, sculpting narratives that resonate. Klarelo is where your message transforms into an impactful legacy. Leading digital agency in Nairobi specializing in creative communications, brand strategy, and PR solutions.",
    siteName: "Klarelo Communications",
    images: [
      {
        url: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
        width: 1200,
        height: 630,
        alt: "Klarelo Communications Logo",
      },
    ],
    countryName: "Kenya",
    determiner: "the",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klarelo Communications - Digital Alchemy for Brands",
    description:
      "We redefine communication, sculpting narratives that resonate. Transform your brand with our creative communications, brand strategy, and PR expertise in Nairobi, Kenya.",
    images: [
      {
        url: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
        alt: "Klarelo Communications Logo",
      },
    ],
    site: "@klarelocomms",
    creator: "@klarelocomms",
  },
  icons: {
    icon: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
    apple:
      "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlebd93f900b7be6f82",
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
        <meta name="google-site-verification" content="googlebd93f900b7be6f82" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Klarelo Communications",
              alternateName: "Klarelo",
              url: "https://www.klarelocommunications.com/",
              logo: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
              foundingDate: "2023",
              description: "We redefine communication, sculpting narratives that resonate. Klarelo is where your message transforms into an impactful legacy.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
                addressLocality: "Nairobi",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+254 703 406 865",
                  contactType: "customer service",
                  areaServed: "KE",
                  availableLanguage: "English",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/klarelo-communications/",
                "https://www.instagram.com/ruth_mboya/",
                "https://www.facebook.com/mboyaruth?mibextid=ZbWKwL",
              ],
            }),
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Klarelo Communications",
              image: "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/klarelo.webp?updatedAt=1709820464117",
              telephone: "+254 703 406 865",
              email: "info@klarelocommunications.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
                addressLocality: "Nairobi",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.286389,
                longitude: 36.817223,
              },
              url: "https://www.klarelocommunications.com/",
              openingHours: "Mo,Tu,We,Th,Fr 08:00-17:00",
              priceRange: "$$$",
              servesCuisine: "Digital Strategy, Branding, PR",
              areaServed: "KE",
              description: "Leading communications agency specializing in creative PR, brand strategy, and digital solutions in Nairobi, Kenya.",
              keywords: "Digital Agency, Creative Communications, Brand Strategy, Public Relations, Crisis Communication",
            }),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Klarelo Communications",
              url: "https://www.klarelocommunications.com/",
              description: "We redefine communication, sculpting narratives that resonate. Klarelo is where your message transforms into an impactful legacy.",
              publisher: {
                "@type": "Organization",
                name: "Klarelo Communications",
              },
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${syne.variable} ${playfair.variable} antialiased`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
