// Optional: lock to SSG
export const dynamic = "force-static";
export const revalidate = false;

// importing tools
import Script from "next/script";
import nextDynamic from "next/dynamic";

// json data import
import Homepageherodata from "@/app/data/shareddata/hersectiondata.json";
import Homepageheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Homecarddata from "../app/data/homedata/homecardcollectiondata.json";
import Calltoactiondata from "./data/shareddata/calltoactiondata.json";
import Homeadvantegessectiondata from "./data/homedata/homeadvantegessectiondata.json";
import Homeindustriessectiondata from "../app/data/homedata/homeindustriessectiondata.json";
import Benefitssectiondata from "./data/homedata/benefitssectiondata.json";
import Homepagejsonld from "@/app/data/jsonld/homepage.json";

// importing componenets
import MainPageHeroSection from "./components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
const MainHeadingSection = nextDynamic(() =>
  import("./components/pagecomponents/Shared/mainheadingsection/mainheadingsection")
);
const ExpertiseCollection = nextDynamic(() =>
  import("./components/pagecomponents/homepagecomponents/expertisecollection")
);
const HomeAdvantagesSection = nextDynamic(() =>
  import("./components/pagecomponents/homepagecomponents/homeadvantegessection")
);
const HomeIndustriesSection = nextDynamic(() =>
  import("./components/pagecomponents/homepagecomponents/homeindustriessection")
);
const CallToAction = nextDynamic(() =>
  import("./components/pagecomponents/Shared/calltoaction/calltoaction")
);
const BenefitsSection = nextDynamic(() =>
  import("./components/pagecomponents/homepagecomponents/benefitssection")
);
const HomePageContactUsForm = nextDynamic(() =>
  import("./components/pagecomponents/homepagecomponents/homepagecontactusform")
);

export const metadata = {
  title: "Outsourced Business Services | Manage Outsource Services",
  description:
    "Manage Outsource Services provides scalable IT consultancy, accounting, and web development solutions for businesses seeking efficient and cost-effective operations support.",
  keywords: [
    "Manage Outsource Services",
    "Outsourced Business Services",
    "IT Consultancy",
    "Accounting and Reporting",
    "Web Development",
    "Business Process Outsourcing",
    "Operations Support",
    "Finance Services",
    "Remote Teams",
    "Custom Software Solutions",
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
    title: "Outsourced Business Services | Manage Outsource Services",
    description:
      "Explore our professional outsourcing solutions in IT consultancy, accounting, and web development. Empower your business with flexible and scalable support.",
    url: "https://www.manageoutsources.com",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "https://www.manageoutsource.com/images/mos_homepage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services - Professional Business Support",
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
    title: "Outsourced Business Services | Manage Outsource Services",
    description:
      "Professional outsourcing in IT, accounting, and web development. Let Manage Outsource Services support your operations.",
    images: [
      "https://www.manageoutsource.com/images/mos_homepage_preview_image.webp",
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
    canonical: "https://www.manageoutsources.com",
  },

  category: "Business Services",
  datePublished: "2025-08-07",
};

export default function Home() {
  const cards = Homecarddata.home.cards;
  return (
    <>
      <Script
        id="jsonld-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Homepagejsonld) }}
      />
      <MainPageHeroSection
        title={Homepageherodata.home.title}
        paragraph={Homepageherodata.home.paragraph}
        textOrientation={Homepageherodata.home.textOrientation}
        backgroundImages={Homepageherodata.home.backgroundImages}
      />
      <MainHeadingSection
        title={Homepageheadingsectiondata.home.title}
        description={Homepageheadingsectiondata.home.description}
        tagtext={Homepageheadingsectiondata.home.tagtext}
        backgroundImages={Homepageheadingsectiondata.home.backgroundImages}
      />
      <ExpertiseCollection cards={cards} />
      <HomeAdvantagesSection
        Homeadvantegessectiondata={Homeadvantegessectiondata}
      />
      <HomeIndustriesSection
        Homeindustriessectiondata={Homeindustriessectiondata}
      />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <BenefitsSection Benefitssectiondata={Benefitssectiondata} />
      <HomePageContactUsForm />
    </>
  );
}
