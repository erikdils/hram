import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Храм Різдва Христового | УГКЦ — Духовний центр громади",
  description:
    "Храм Різдва Христового — парафія УГКЦ. Розклад богослужінь, пожертви на будівництво, меценатство, онлайн-трансляції. Приєднуйтесь до нашої духовної громади — молимось разом.",
  keywords: [
    "Храм Різдва Христового",
    "УГКЦ",
    "парафія УГКЦ",
    "розклад богослужінь",
    "Божественна Літургія",
    "пожертва на храм",
    "меценатство",
    "будівництво храму",
    "іменна цеглина",
    "підтримати церкву",
    "православна громада",
    "греко-католицька церква",
    "онлайн богослужіння",
    "трансляція служби",
    "духовний центр",
    "недільна школа",
    "панахида",
    "сповідь та причастя",
    "церковний календар",
    "великий піст",
    "пасха",
    "різдво",
  ],
  authors: [{ name: "Храм Різдва Христового" }],
  creator: "Храм Різдва Христового",
  publisher: "Храм Різдва Христового",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Храм Різдва Христового — Будуємо Святиню Разом",
    description:
      "Парафія УГКЦ. Місце молитви, єднання та духовного зростання. Підтримайте будівництво нашого храму — станьте меценатом або зробіть пожертву.",
    type: "website",
    locale: "uk_UA",
    url: "https://hram-rizdva.ua",
    siteName: "Храм Різдва Христового",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Храм Різдва Христового — УГКЦ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Храм Різдва Христового | УГКЦ",
    description:
      "Приєднуйтесь до нашої громади. Розклад богослужінь, меценатство та підтримка будівництва храму.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: "https://hram-rizdva.ua",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "Храм Різдва Христового",
              description:
                "Парафія УГКЦ. Місце молитви, духовного зростання та єднання громади.",
              url: "https://hram-rizdva.ua",
              image: "https://hram-rizdva.ua/images/og-cover.jpg",
              openingHours: "Mo-Su 08:00-20:00",
              denomination: "Українська Греко-Католицька Церква",
              address: {
                "@type": "PostalAddress",
                addressCountry: "UA",
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.youtube.com/",
                "https://t.me/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
