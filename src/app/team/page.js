// importing tools
import Script from "next/script";

// componenet data imports
import TeamHeroData from "@/app/data/shareddata/hersectiondata.json";
import Teamheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Teampagedata from "../data/teamdata/teampagedata.json";
import teammembersdata from "@/app/data/teamdata/dicteamdata.json";
import Teampagejsonld from "@/app/data/jsonld/teampage.json";

// page componenets
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import ExecutiveTeamSection from "../components/pagecomponents/teampagecomponents/executiveteamsection";
import TeamMemebersSection from "../components/pagecomponents/teampagecomponents/teammemberssection";

export const metadata = {
  title: "Our Team | Manage Outsource Services",
  description:
    "Meet the leadership and expert professionals behind Manage Outsource Services. Our team brings years of experience in IT consultancy, web development, and business operations support.",
  keywords: [
    "Manage Outsource Services Team",
    "Company Leadership",
    "Outsourcing Experts",
    "IT Consultancy Team",
    "Web Development Professionals",
    "Accounting Experts",
    "Business Process Team",
    "Meet Our Team",
    "Operations Support Staff",
    "Expert Business Services Team",
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
    title: "Our Team | Manage Outsource Services",
    description:
      "Meet the experienced professionals driving our IT consultancy, web development, and outsourced business solutions.",
    url: "https://www.manageoutsources.com/team",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "https://www.manageoutsource.com/images/mos_teampage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services Team Preview",
      },
      {
        url: "https://www.manageoutsource.com/images/mos_logo.webp",
        width: 600,
        height: 600,
        alt: "Manage Outsource Services Logo",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Manage Outsource Services",
    description:
      "Get to know the people behind Manage Outsource Services – specialists in IT, web, and business support.",
    images: ["https://www.manageoutsource.com/images/mos_teampage_preview_image.webp"],
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
    canonical: "https://www.manageoutsources.com/team",
  },
  category: "Business Services",
  datePublished: "2025-08-07",
};

export default function Team() {
  const executivecards = Teampagedata.team.executivecards;
  return (
    <>
      <Script
        id="jsonld-teampage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Teampagejsonld) }}
      />
      <MainPageHeroSection
        title={TeamHeroData.team.title}
        paragraph={TeamHeroData.team.paragraph}
        textOrientation={TeamHeroData.team.textOrientation}
        backgroundImages={TeamHeroData.team.backgroundImages}
      />
      <MainHeadingSection
        title={Teamheadingsectiondata.team.title}
        description={Teamheadingsectiondata.team.description}
        tagtext={Teamheadingsectiondata.team.tagtext}
        backgroundImages={Teamheadingsectiondata.team.backgroundImages}
      />
      <ExecutiveTeamSection executivecards={executivecards} />
      <TeamMemebersSection teammembersdata={teammembersdata} />
    </>
  );
}
