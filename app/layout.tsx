import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappButton } from "@/components/whatsapp-button";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gara Digital",
  url: siteUrl,
  logo: `${siteUrl}/images/gara-brand.png`,
  description:
    "Agencia publicitaria especializada en estrategia digital, branding, producción audiovisual y desarrollo web.",
  areaServed: "Panamá",
  email: "garadigital@gmail.com",
  telephone: "+507 6410-3972",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b20" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gara Digital | Ideas que se convierten en resultados",
    template: "%s | Gara Digital",
  },
  description:
    "Agencia publicitaria en Panamá especializada en marketing digital, branding, producción audiovisual, desarrollo web y cobertura de eventos.",
  applicationName: "Gara Digital",
  keywords: [
    "agencia publicitaria Panamá",
    "marketing digital",
    "manejo de redes sociales",
    "producción audiovisual",
    "cobertura de eventos",
    "desarrollo web",
    "branding",
    "Meta Ads",
  ],
  authors: [{ name: "Gara Digital" }],
  creator: "Gara Digital",
  publisher: "Gara Digital",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/",
    siteName: "Gara Digital",
    title: "Gara Digital | Transformamos ideas en resultados",
    description:
      "Creatividad, estrategia y tecnología para marcas que quieren crecer.",
    images: [
      {
        url: "/images/gara-brand.png",
        width: 1440,
        height: 1920,
        alt: "Gara Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gara Digital | Transformamos ideas en resultados",
    description:
      "Creatividad, estrategia y tecnología para marcas que quieren crecer.",
    images: ["/images/gara-brand.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem('gara-theme')}catch(e){}if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;window.addEventListener('storage',function(e){if(e.key==='gara-theme'){document.documentElement.dataset.theme=e.newValue==='dark'?'dark':'light';window.dispatchEvent(new Event('gara-theme'))}})})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
