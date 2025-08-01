// importing tools
import Script from "next/script";

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
import MainHeadingSection from "./components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import ExpertiseCollection from "./components/pagecomponents/homepagecomponents/expertisecollection";
import HomeAdvantagesSection from "./components/pagecomponents/homepagecomponents/homeadvantegessection";
import HomeIndustriesSection from "./components/pagecomponents/homepagecomponents/homeindustriessection";
import CallToAction from "./components/pagecomponents/Shared/calltoaction/calltoaction";
import BenefitsSection from "./components/pagecomponents/homepagecomponents/benefitssection";
import HomePageContactUsForm from "./components/pagecomponents/homepagecomponents/homepagecontactusform";
// import HomeReviewSection from "./components/pagecomponents/homepagecomponents/homereviewsection";
// import Homereviewsectiondata from "./data/homedata/homereviewsectiondata.json";

export const metadata = {
  title:
    "Manage Outsource Services | IT Consultancy, Web Development, Accounting",
  description:
    "Manage Outsource Services delivers expert IT support, tailored web development, and professional accounting and reporting solutions to help businesses scale securely and efficiently.",
  keywords: [
    "Manage Outsource Services",
    "IT Consultancy Pakistan",
    "Web Development Pakistan",
    "Accounting and Reporting Services",
    "Business Support Solutions",
    "Outsourcing Services Pakistan",
    "Custom Web Design",
    "Digital Financial Reporting",
    "Financial Sector IT",
    "Outsourcing for Businesses",
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
    title:
      "Manage Outsource Services | IT Consultancy, Web Development, Accounting",
    description:
      "Expert IT services, custom-built websites, and precise accounting & reporting — all in one outsourcing partner.",
    url: "https://www.manageoutsourceservices.com",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/company-logo.webp", // replace with your real WebP hero image
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services Website Homepage Preview",
      },
      {
        url: "/images/company-logo.webp", // your circular or square logo
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
    title: "Manage Outsource Services | Your Trusted Business Partner",
    description:
      "Custom web development, reliable IT support, and accounting services designed for the modern business landscape.",
    images: ["/images/mos-logo.webp"],
    creator: "@manageoutsourceservices", // optional: add your real Twitter handle
  },
  icons: {
    icon: "/images/favicon-32x32.png",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://www.manageoutsourceservices.com",
  },
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
      {/* <HomeReviewSection Homereviewsectiondata={Homereviewsectiondata} /> */}
      <HomePageContactUsForm />
    </>
  );
}
