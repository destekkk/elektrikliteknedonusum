import type { Metadata } from "next";
import { Syne, Manrope, Outfit } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const brand = Outfit({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["500", "600", "700", "800"],
});

import { faqItems } from "../data/faq";

const siteUrl = "http://elektrikliteknedonusum.com";

const title =
  "Elektrikli Tekne Dönüşüm | Elektrikli Motor, Batarya ve Montaj | İstanbul Galata";
const description =
  "Elektrikli tekne dönüşüm hizmeti: içten takma ve dıştan takma elektrik motor, lityum batarya sistemi, şarj altyapısı, montaj ve teslimat. Dizel/benzinli tekne motorunu elektriğe çevirin. Atölye Galata, Türkiye geneli.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | ElektrikliTekneDönüşüm",
  },
  description,
  keywords: [
    // Ana
    "elektrikli tekne dönüşüm",
    "elektrikli tekne dönüşümü",
    "tekne elektrikli dönüşüm",
    "tekneyi elektriğe çevirme",
    "elektrikli tekne",
    "elektrik tekne motoru",
    // Motor
    "elektrikli tekne motoru",
    "elektrikli tekne motor dönüşümü",
    "içten takma elektrik motor",
    "içten takma elektrikli motor",
    "dıştan takma elektrik motor",
    "dıştan takma elektrikli motor",
    "elektrikli outboard",
    "elektrikli inboard",
    "tekne motor elektrifikasyonu",
    "dizel motoru elektriğe çevirme",
    "benzinli tekne motoru dönüşüm",
    // Batarya / sistem
    "elektrikli tekne batarya",
    "tekne lityum batarya",
    "tekne batarya sistemi",
    "marine battery",
    "tekne şarj sistemi",
    "elektrikli tahrik sistemi",
    "tekne pervane elektrik",
    // Fayda aramaları
    "sessiz tekne motoru",
    "yakıtsız tekne",
    "düşük maliyetli tekne motoru",
    "çevre dostu tekne",
    "egzozsuz tekne",
    // Lokasyon
    "İstanbul elektrikli tekne",
    "Galata tekne atölye",
    "Atölye Galata",
    "marina elektrikli dönüşüm",
    "Türkiye elektrikli tekne dönüşüm",
    // Marka
    "ElektrikliTekneDönüşüm",
    "elektrikliteknedonusum",
  ],
  authors: [{ name: "ElektrikliTekneDönüşüm", url: siteUrl }],
  creator: "ElektrikliTekneDönüşüm",
  publisher: "ElektrikliTekneDönüşüm",
  applicationName: "ElektrikliTekneDönüşüm",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "ElektrikliTekneDönüşüm",
    title,
    description,
    images: [
      {
        url: "/hero-boat.jpg",
        width: 1200,
        height: 630,
        alt: "Elektrikli tekne dönüşüm — deniz ve modern tekne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elektrikli Tekne Dönüşüm | Motor & Batarya",
    description,
    images: ["/hero-boat.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul, Galata",
    "geo.position": "41.025;28.974",
    ICBM: "41.025, 28.974",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ElektrikliTekneDönüşüm",
      alternateName: [
        "Elektrikli Tekne Dönüşüm",
        "elektrikliteknedonusum.com",
      ],
      url: siteUrl,
      logo: `${siteUrl}/hero-boat.jpg`,
      email: "info@elektrikliteknedonusum.com",
      telephone: "+905555269770",
      description,
      foundingLocation: {
        "@type": "Place",
        name: "Galata, İstanbul",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+905555269770",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: ["Turkish"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "ElektrikliTekneDönüşüm — Atölye Galata",
      image: [
        `${siteUrl}/hero-boat.jpg`,
        `${siteUrl}/part-motor.jpg`,
        `${siteUrl}/part-inboard-motor.jpg`,
        `${siteUrl}/part-battery.jpg`,
      ],
      url: siteUrl,
      telephone: "+905555269770",
      email: "info@elektrikliteknedonusum.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Atölye Galata",
        addressLocality: "Galata",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.025,
        longitude: 28.974,
      },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "İstanbul" },
        { "@type": "City", name: "İzmir" },
        { "@type": "City", name: "Antalya" },
        { "@type": "City", name: "Muğla" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Elektrikli tekne dönüşüm hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dıştan takma elektrik motor dönüşümü",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "İçten takma elektrik motor dönüşümü",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tekne batarya ve şarj sistemi kurulumu",
            },
          },
        ],
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ElektrikliTekneDönüşüm",
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "tr-TR",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description,
      inLanguage: "tr-TR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/hero-boat.jpg`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Elektrikli Tekne Dönüşüm",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${brand.variable}`}>
        {children}
      </body>
    </html>
  );
}
