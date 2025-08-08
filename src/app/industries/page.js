// importing tools
import Script from "next/script";

// importing componenet data imports
import IndustriesHeroData from "@/app/data/shareddata/hersectiondata.json";
import Industriesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import Industriespagejsonld from "@/app/data/jsonld/industriespage.json";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";

//importing components
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import CardCollection from "../components/pagecomponents/Shared/cardcollection/cardcollection";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";


export const metadata = {
  title: "Industries We Serve | Manage Outsource Services",
  description:
    "Discover how Manage Outsource Services supports diverse industries — from finance and healthcare to technology and retail — with tailored outsourcing solutions.",
  keywords: [
    "Industries We Serve",
    "Manage Outsource Services",
    "Industry-Specific Solutions",
    "IT Services for Finance",
    "Healthcare IT Consultancy",
    "Retail Software Development",
    "Accounting for Businesses",
    "Web Development by Industry",
    "Outsourcing by Sector",
    "Business Support Services",
  ],

  authors: [
    {
      name: "Manage Outsource Services",
      url: "https://www.manageoutsource.com",
    },
  ],
  creator: "Manage Outsource Services",
  publisher: "Manage Outsource Services",

  metadataBase: new URL("https://www.manageoutsource.com"),

  openGraph: {
    title: "Industries We Serve | Manage Outsource Services",
    description:
      "Explore our industry-focused services across finance, healthcare, retail, and more. Manage Outsource Services delivers tailored business support for every sector.",
    url: "https://www.manageoutsource.com/industries",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "https://www.manageoutsource.com/images/mos_industriespage_preview_image",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services - Industries We Serve",
      },
      {
        url: "https://www.manageoutsource.com/images/mos_logo.webp",
        width: 600,
        height: 600,
        alt: "Manage Outsource Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Manage Outsource Services",
    description:
      "Manage Outsource Services supports multiple sectors, offering tailored IT, accounting, and development solutions for industry-specific needs.",
    images: ["https://www.manageoutsource.com/images/mos_industriespage_preview_image"],
    creator: "@manageoutsource",
    site: "@manageoutsource",
  },

  icons: {
    icon: [
      { url: "https://www.manageoutsource.com/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "https://www.manageoutsource.com/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "https://www.manageoutsource.com/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "https://www.manageoutsource.com/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://www.manageoutsource.com/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "https://www.manageoutsource.com/images/favicon.ico", type: "image/x-icon" }],
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  alternates: {
    canonical: "https://www.manageoutsource.com/industries",
  },

  category: "Business Services",
  datePublished: "2025-08-07",
};


export default function Industries() {
  const cards = cardData.industries.cards;
  return (
    <>
      <Script
        id="jsonld-industriespage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Industriespagejsonld) }}
      />
      <MainPageHeroSection
        title={IndustriesHeroData.industries.title}
        paragraph={IndustriesHeroData.industries.paragraph}
        textOrientation={IndustriesHeroData.industries.textOrientation}
        backgroundImages={IndustriesHeroData.industries.backgroundImages}
      />
      <MainHeadingSection
        title={Industriesheadingsectiondata.industries.title}
        description={Industriesheadingsectiondata.industries.description}
        tagtext={Industriesheadingsectiondata.industries.tagtext}
        backgroundImages={Industriesheadingsectiondata.industries.backgroundImages}
      />
      <CardCollection cards={cards} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
    </>
  );
}
