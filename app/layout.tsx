import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dex",
  alternateName: "Dex AI Personal CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS",
  url: "https://dex.saaryan.com/",
  screenshot: [
    "https://dex.saaryan.com/search-dark.png",
    "https://dex.saaryan.com/recording-dark.png",
    "https://dex.saaryan.com/hitl-dark.png",
    "https://dex.saaryan.com/briefing-dark.png",
  ],
  featureList: [
    "Voice to CRM capture via AI voice notes",
    "Intelligent relationship manager with semantic search",
    "Human-in-the-loop contact manager verification",
    "Pre-meeting relationship briefings",
  ],
  description:
    "Dex is an AI personal CRM, intelligent CRM, and iOS relationship manager built for effortless relationship management and networking. Capture AI voice notes in thirty seconds and turn voice to CRM contact memory without manual data entry.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  author: {
    "@type": "Person",
    name: "Aaryan Sharma",
    url: "https://www.saaryan.com",
    sameAs: [
      "https://github.com/sharmaaaryan4012",
      "https://www.linkedin.com/in/sharmaaaryan",
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dex.saaryan.com"),
  title: {
    default: "Dex | The AI Personal CRM",
    template: "%s | Dex | The AI Personal CRM",
  },
  description:
    "Dex is an intelligent CRM and personal CRM for iPhone. An AI relationship manager that turns 30-second AI voice notes into structured, searchable contact memory.",
  applicationName: "Dex",
  category: "business",
  keywords: [
    "personal CRM",
    "AI CRM",
    "intelligent CRM",
    "relationship management",
    "contact manager",
    "voice to CRM",
    "networking app",
    "iOS CRM",
    "AI voice notes",
    "relationship manager",
    "Dex",
    "iPhone CRM",
    "Aaryan Sharma",
  ],
  authors: [{ name: "Aaryan Sharma", url: "https://www.saaryan.com" }],
  creator: "Aaryan Sharma",
  publisher: "Aaryan Sharma",
  alternates: {
    canonical: "https://dex.saaryan.com/",
  },
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
    type: "website",
    locale: "en_US",
    url: "https://dex.saaryan.com/",
    title: "Dex | The AI Personal CRM",
    description:
      "Voice in. Context out. The AI personal CRM and intelligent relationship manager for iPhone powered by natural AI voice notes.",
    siteName: "Dex",
    images: [
      {
        url: "/search-dark.png",
        width: 1206,
        height: 2622,
        alt: "Dex AI Personal CRM semantic search interface on iOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dex | The AI Personal CRM",
    description:
      "An intelligent CRM and personal CRM for iPhone. Turn 30-second AI voice notes into searchable relationship memory.",
    images: ["/search-dark.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/dex-icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/dex-icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/dex-icon-light.png",
  },
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-background text-foreground font-sans overflow-x-hidden"
      >
        <script
          id="schema-software-application"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <ThemeProvider>
          <Cursor />
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
