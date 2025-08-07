// importing tools
import Script from "next/script";

// import sub componenets
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import AboutTextSection from "../components/pagecomponents/aboutpagecomponents/abouttextsection";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";
import AboutLowerTextSection from "../components/pagecomponents/aboutpagecomponents/aboutlowertextsection";

// import json data files
import Abouttextsectiondata from "../data/aboutdata/abouttextsectiondata.json";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import AboutHeroData from "@/app/data/shareddata/hersectiondata.json";
import Aboutheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Aboutlowersectiondata from "../data/aboutdata/aboutlowersectiondata.json";
import Aboutpagejsonld from "@/app/data/jsonld/aboutpage.json";

export const metadata = {
  title: "About Us | Manage Outsource Services",
  description:
    "Learn about Manage Outsource Services — our mission, team, and commitment to delivering tailored IT, accounting, and development solutions for modern businesses.",
  keywords: [
    "About Manage Outsource Services",
    "Company Overview",
    "Our Mission",
    "Our Team",
    "IT Consultancy Company",
    "Web Development Firm",
    "Accounting Solutions Provider",
    "Outsourcing Experts",
    "Business Support Team",
    "Managed Services Company",
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
    title: "About Us | Manage Outsource Services",
    description:
      "Get to know the team and values behind Manage Outsource Services. We empower businesses with strategic outsourcing in IT, accounting, and web development.",
    url: "https://www.manageoutsourceservices.com/about",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/mos_aboutpage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "About Manage Outsource Services",
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
    title: "About Us | Manage Outsource Services",
    description:
      "Meet the people behind Manage Outsource Services and learn how we deliver impactful outsourcing solutions across industries.",
    images: ["/images/mos_aboutpage_preview_image.webp"],
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
    canonical: "https://www.manageoutsourceservices.com/about",
  },

  category: "Company Information",
  datePublished: "2025-08-07",
};

export default function About() {
  return (
    <>
      <Script
        id="jsonld-aboutpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Aboutpagejsonld),
        }}
      />
      <MainPageHeroSection
        title={AboutHeroData.about.title}
        paragraph={AboutHeroData.about.paragraph}
        textOrientation={AboutHeroData.about.textOrientation}
        backgroundImages={AboutHeroData.about.backgroundImages}
      />
      <MainHeadingSection
        title={Aboutheadingsectiondata.about.title}
        description={Aboutheadingsectiondata.about.description}
        tagtext={Aboutheadingsectiondata.about.tagtext}
        backgroundImages={Aboutheadingsectiondata.about.backgroundImages}
      />
      <AboutTextSection Abouttextsectiondata={Abouttextsectiondata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <AboutLowerTextSection Aboutlowersectiondata={Aboutlowersectiondata} />
    </>
  );
}
