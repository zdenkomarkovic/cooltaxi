import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cool Taxi Niš - Pouzdan taxi prevoz 24/7 | Taksi Niš",
  description:
    "Cool Taxi Niš - vodeća taksi firma u Nišu od 2000. godine. Brz, pouzdan i ekološki prevoz 24/7. Pozovite 19711 ili 065/97 197 11. Hibridna i električna vozila.",
  keywords: [
    "taksi niš",
    "cool taxi niš",
    "taxi prevoz niš",
    "taksi 24/7 niš",
    "taxi aerodrom niš",
    "taxi aerodrom",
    "taksi beograd niš",
    "taksi beograd aerodrom",
    "ekološki taxi niš",
    "hibridni taxi niš",
    "taxi aplikacija niš",
    "eko taxi",
    "city-taxi",
    "prvi taxi",
    "prvi taksi",
    "prvi taxi nis",
    "prvi taksi nis",
    "taxi niš cene",
    "taksi cenovnik niš",
  ],
  authors: [{ name: "Cool Taxi Niš" }],
  creator: "Cool Taxi Niš",
  publisher: "Cool Taxi Niš",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.taxinis.rs"),
  alternates: {
    canonical: "https://www.taxinis.rs/",
  },
  openGraph: {
    title: "Cool Taxi Niš - Pouzdan taxi prevoz 24/7",
    description:
      "Cool Taxi Niš - vodeća taksi firma u Nišu od 2000. godine. Brz, pouzdan i ekološki prevoz 24/7. Hibridna i električna vozila.",
    url: "https://www.taxinis.rs",
    siteName: "Cool Taxi Niš",
    images: [
      {
        url: "/cool_logo.png",
        width: 800,
        height: 600,
        alt: "Cool Taxi Niš Logo",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Taxi Niš - Pouzdan taxi prevoz 24/7",
    description:
      "Cool Taxi Niš - vodeća taksi firma u Nišu od 2000. godine. Brz, pouzdan i ekološki prevoz 24/7.",
    images: ["/cool_logo.png"],
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
  verification: {
    google: "your-google-verification-code", // Dodajte svoj Google Search Console kod
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        {/* Preload kritičnih resursa */}
        <link rel="preload" href="/cool_logo.png" as="image" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FQKQL1F4XC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FQKQL1F4XC');
            `,
          }}
        />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />

        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Yandex Webmaster */}
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />

        {/* Performance optimizations */}
        <meta name="theme-color" content="#22c55e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cool Taxi Niš" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Cool Taxi Niš",
              description:
                "Vodeća taksi firma u Nišu od 2000. godine. Brz, pouzdan i ekološki prevoz 24/7.",
              url: "https://www.taxinis.rs",
              logo: "https://www.taxinis.rs/logo.png",
              image: "https://www.taxinis.rs/logo.png",
              telephone: ["+38119711", "+381659719711"],
              email: "office@cooltaxi.rs",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pantelejska 4",
                addressLocality: "Niš",
                postalCode: "18000",
                addressCountry: "RS",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.3274182,
                longitude: 21.9035638,
              },
              hasMap:
                "https://www.google.com/maps/place/Cool+Taxi+Ni%C5%A1/@43.3274182,21.9035638,17z",
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              serviceType: "Taxi Service",
              foundingDate: "2000",
              founder: {
                "@type": "Person",
                name: "Cool Taxi Niš tim",
              },
              areaServed: {
                "@type": "City",
                name: "Niš",
              },
              serviceArea: [
                { "@type": "Place", name: "Niš" },
                { "@type": "Place", name: "Prokuplje" },
                { "@type": "Place", name: "Leskovac" },
                { "@type": "Place", name: "Aerodrom Konstantin Veliki Niš" },
              ],
              sameAs: [
                "https://www.facebook.com/cooltaxinis",
                "https://www.instagram.com/cool_taxi_nis/",
                "https://www.tiktok.com/@cool.taxi.nis",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "128",
                bestRating: "5",
                worstRating: "1",
              },

              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Taxi Usluge",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Taxi prevoz u Nišu",
                      description: "Brzi i pouzdan taxi prevoz u Nišu",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Taxi do aerodroma",
                      description: "Prevoz do svih aerodroma u regionu",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
