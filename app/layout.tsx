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
  alternateName: "Dex Personal Relationship Memory",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS",
  url: "https://dex.saaryan.com/",
  image: "https://dex.saaryan.com/dex-preview.png",
  featureList: [
    "Voice to text memory capture via 30-second unstructured voice notes",
    "The external brain for your network with instant semantic search",
    "Intelligent relationship manager with one-tap contact memory verification",
    "AI networking app without manual data entry or database forms",
    "Pre-meeting relationship briefings surfaced five minutes prior",
  ],
  description:
    "Dex is an intelligent relationship manager, AI networking app, and personal relationship memory engine for iPhone. Built as the external brain for your network for founders, MBA students, and high-network professionals to capture 30-second voice notes with voice to text memory and zero form fields.",
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
    default: "Dex | The External Brain for Your Network",
    template: "%s | Dex | The External Brain for Your Network",
  },
  description:
    "Dex is an intelligent relationship manager and AI networking app for iPhone. Built as the external brain for your network, it turns 30 seconds of unstructured speech into structured recall using voice to text memory without ever touching a form field.",
  applicationName: "Dex",
  category: "productivity",
  keywords: [
    "intelligent relationship manager",
    "AI networking app",
    "voice to text memory",
    "personal relationship memory",
    "the external brain for your network",
    "relationship memory",
    "networking app",
    "voice to memory",
    "founder networking",
    "MBA networking",
    "super-connector",
    "AI voice notes",
    "Dex",
    "iPhone app",
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
    title: "Dex | The External Brain for Your Network",
    description:
      "Voice in. Context out. The external brain for your network and personal relationship memory for iPhone powered by natural voice notes.",
    siteName: "Dex",
    images: [
      {
        url: "https://dex.saaryan.com/dex-preview.png",
        secureUrl: "https://dex.saaryan.com/dex-preview.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Dex | The External Brain for Your Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dex | The External Brain for Your Network",
    description:
      "The external brain for your network and personal relationship memory for iPhone. Turn 30-second voice notes into searchable context with zero manual entry.",
    images: ["https://dex.saaryan.com/dex-preview.png"],
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
