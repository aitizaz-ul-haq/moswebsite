// importing tools
import Script from "next/script";

// importing componenet data
import ServicesHeroData from "@/app/data/shareddata/hersectiondata.json";
import Servicesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";
import Advantagessectiondata from "../data/servicesdata/advantagessectiondata.json";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import Importancesectiondata from "../data/servicesdata/importancesectiondata.json";
import Servicespagejsonld from "@/app/data/jsonld/services.json";

// importing page componenets
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import CardCollection from "../components/pagecomponents/Shared/cardcollection/cardcollection";
import ServicesAdvantagesSection from "../components/pagecomponents/servicespagecomponents/servicesadvantagessection";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";
import ImportanceSection from "../components/pagecomponents/servicespagecomponents/importancesection";

// import HomeReviewSection from "../components/pagecomponents/homepagecomponents/homereviewsection";
// import Homereviewsectiondata from "../data/servicesdata/servicesreviewdata.json";

export const metadata = {
  title: "Our Services | Manage Outsource Services",
  description:
    "Explore the complete range of services offered by Manage Outsource Services, including IT consultancy, accounting and reporting, and custom web development tailored for operational efficiency.",
  keywords: [
    "Manage Outsource Services",
    "Outsourced Business Services",
    "IT Consultancy",
    "Accounting and Reporting",
    "Web Development",
    "Custom Software Solutions",
    "Remote Business Support",
    "Operations Management",
    "Business Process Outsourcing",
    "Enterprise IT Services",
  ],

  authors: [
    {
      name: "Manage Outsource Services",
      url: "https://www.manageoutsourceservices.com",
    },
  ],
  creator: "Manage Outsource Services",
  publisher: "Manage Outsource Services",

  metadataBase: new URL("https://www.manageoutsourceservices.com"),

  openGraph: {
    title: "Our Services | Manage Outsource Services",
    description:
      "Learn about our key services across IT consultancy, custom web development, and accounting & reporting — all designed to streamline your business operations.",
    url: "https://www.manageoutsourceservices.com/services",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/services-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services - Services Page",
      },
      {
        url: "/images/mos_logo.webp",
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
    title: "Our Services | Manage Outsource Services",
    description:
      "Detailed overview of our outsourced services in IT consultancy, web development, and accounting. Discover how we support business success.",
    images: ["/images/services-page-preview.webp"],
    creator: "@manageoutsource",
    site: "@manageoutsource",
  },

  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
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
    canonical: "https://www.manageoutsourceservices.com/services",
  },

  category: "Business Services",
  datePublished: "2025-08-07",
};

export default function Services() {
  const cards = cardData.features.cards;
  return (
    <>
      <Script
        id="jsonld-servicespage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Servicespagejsonld) }}
      />
      <MainPageHeroSection
        title={ServicesHeroData.features.title}
        paragraph={ServicesHeroData.features.paragraph}
        textOrientation={ServicesHeroData.features.textOrientation}
        backgroundImages={ServicesHeroData.features.backgroundImages}
      />
      <MainHeadingSection
        title={Servicesheadingsectiondata.features.title}
        description={Servicesheadingsectiondata.features.description}
        tagtext={Servicesheadingsectiondata.features.tagtext}
        backgroundImages={Servicesheadingsectiondata.features.backgroundImages}
      />
      <CardCollection cards={cards} />
      <ServicesAdvantagesSection
        Advantagessectiondata={Advantagessectiondata}
      />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <ImportanceSection Importancesectiondata={Importancesectiondata} />
      {/* <HomeReviewSection Homereviewsectiondata={Homereviewsectiondata} /> */}
    </>
  );
}
