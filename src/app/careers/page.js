// importing tools
import Script from "next/script";

// import json data
import CareersHeroData from "@/app/data/shareddata/hersectiondata.json";
import Applyformdata from "../data/careersdata/applyformdata.json";
import PositionsSectionData from "@/app/data/careersdata/positionsdata.json";
import Careersheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import NoVacancySectionData from "@/app/data/careersdata/novacancy.json";
import Careerspagejsonld from "@/app/data/jsonld/careerspage.json";

// importing components
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import PositionsSections from "../components/pagecomponents/careerspagecomponents/positionssection";
import NoVacancyComp from "../components/pagecomponents/careerspagecomponents/novacancycomp";
import ApplyForm from "../components/pagecomponents/careerspagecomponents/applyform";

export const metadata = {
  title: "Careers | Manage Outsource Services",
  description:
    "Join Manage Outsource Services and grow your career in IT consultancy, web development, and accounting. Explore our latest job openings and become part of a dynamic outsourcing team.",
  keywords: [
    "Careers at Manage Outsource Services",
    "Job Openings",
    "Work with Us",
    "IT Jobs",
    "Accounting Careers",
    "Web Development Jobs",
    "Business Process Outsourcing Careers",
    "Outsourcing Jobs",
    "Remote Business Jobs",
    "Team Manage Outsource Services",
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
    title: "Careers | Manage Outsource Services",
    description:
      "Discover career opportunities at Manage Outsource Services. Join our growing team of professionals in IT, development, and accounting.",
    url: "https://www.manageoutsourceservices.com/careers",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/mos_careerspage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services - Careers Page Preview",
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
    title: "Careers | Manage Outsource Services",
    description:
      "Explore job opportunities at Manage Outsource Services. Build your future with our IT, development, and accounting teams.",
    images: ["/images/mos_careerspage_preview_image.webp"],
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
    canonical: "https://www.manageoutsourceservices.com/careers",
  },

  category: "Careers",
  datePublished: "2025-08-07",
};

export default function Careers() {
  const isEnabled = PositionsSectionData.enable.enabled === "Yes";

  return (
    <>
      <Script
        id="jsonld-careerspage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Careerspagejsonld) }}
      />
      <MainPageHeroSection
        title={CareersHeroData.careers.title}
        paragraph={CareersHeroData.careers.paragraph}
        textOrientation={CareersHeroData.careers.textOrientation}
        backgroundImages={CareersHeroData.careers.backgroundImages}
      />
      <MainHeadingSection
        title={Careersheadingsectiondata.careers.title}
        description={Careersheadingsectiondata.careers.description}
        tagtext={Careersheadingsectiondata.careers.tagtext}
        backgroundImages={Careersheadingsectiondata.careers.backgroundImages}
      />

      {isEnabled ? (
        <>
          <PositionsSections PositionsSectionData={PositionsSectionData} />
          <ApplyForm Applyformdata={Applyformdata} />
        </>
      ) : (
        <NoVacancyComp NoVacancySectionData={NoVacancySectionData} />
      )}
    </>
  );
}
