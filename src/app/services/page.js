// Optional: lock to SSG
export const dynamic = "force-static";
export const revalidate = false;

// importing tools
import Script from "next/script";
import nextDynamic from "next/dynamic";

// importing component data
import ServicesHeroData from "@/app/data/shareddata/hersectiondata.json";
import Servicesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";
import Advantagessectiondata from "../data/servicesdata/advantagessectiondata.json";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import Importancesectiondata from "../data/servicesdata/importancesectiondata.json";
import Servicespagejsonld from "@/app/data/jsonld/services.json";

// importing page components
// EAGER (above-the-fold)
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";

// LAZY (code-split, still SSG — no ssr:false)
const MainHeadingSection = nextDynamic(
  () =>
    import(
      "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection"
    ),
  { loading: () => null }
);

const CardCollection = nextDynamic(
  () =>
    import("../components/pagecomponents/Shared/cardcollection/cardcollection"),
  { loading: () => null }
);

const ServicesAdvantagesSection = nextDynamic(
  () =>
    import(
      "../components/pagecomponents/servicespagecomponents/servicesadvantagessection"
    ),
  { loading: () => null }
);

const CallToAction = nextDynamic(
  () => import("../components/pagecomponents/Shared/calltoaction/calltoaction"),
  { loading: () => null }
);

const ImportanceSection = nextDynamic(
  () =>
    import(
      "../components/pagecomponents/servicespagecomponents/importancesection"
    ),
  { loading: () => null }
);

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
      url: "https://www.manageoutsources.com",
    },
  ],
  creator: "Manage Outsource Services",
  publisher: "Manage Outsource Services",

  metadataBase: new URL("https://www.manageoutsources.com"),

  openGraph: {
    title: "Our Services | Manage Outsource Services",
    description:
      "Learn about our key services across IT consultancy, custom web development, and accounting & reporting — all designed to streamline your business operations.",
    url: "https://www.manageoutsources.com/services",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "https://www.manageoutsource.com/images/mos_servicespage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services - Services Page",
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
    title: "Our Services | Manage Outsource Services",
    description:
      "Detailed overview of our outsourced services in IT consultancy, web development, and accounting. Discover how we support business success.",
    images: [
      "https://www.manageoutsource.com/images/mos_servicespage_preview_image.webp",
    ],
    creator: "@manageoutsource",
    site: "@manageoutsource",
  },

  icons: {
    icon: [
      {
        url: "https://www.manageoutsource.com/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://www.manageoutsource.com/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
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
    shortcut: [
      {
        url: "https://www.manageoutsource.com/images/favicon.ico",
        type: "image/x-icon",
      },
    ],
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
    canonical: "https://www.manageoutsources.com/services",
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
