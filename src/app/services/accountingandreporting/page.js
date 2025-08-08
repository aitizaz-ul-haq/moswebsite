// importing tools
import Script from "next/script";

// importing data files
import Accherodata from "@/app/data/shareddata/hersectiondata.json";
import AccSeconddata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Accfirstsdata from "@/app/data/shareddata/mainheadingsectiondata.json";
import AcccardData from "@/app/data/shareddata/cardcollectiondata.json";
import AccMethoddata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Accadvdata from "@/app/data/homedata/homecardcollectiondata.json";
import Accountingandreportingjsonld from "@/app/data/jsonld/accountingandreportingpage.json";

// import main comps
import FeaturesTypeTwo from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypetwo";

export const metadata = {
  title: "Accounting and Reporting Services | Manage Outsource Services",
  description:
    "Manage Outsource Services offers professional accounting and reporting services, delivering accuracy, compliance, and actionable insights to support business growth and financial integrity.",
  keywords: [
    "Accounting and Reporting Services",
    "Manage Outsource Services",
    "Outsourced Accounting",
    "Financial Reporting",
    "Business Compliance",
    "Remote Accounting Solutions",
    "Bookkeeping Services",
    "Balance Sheets and Audits",
    "Financial Data Management",
    "Business Accounting Support",
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
    title: "Accounting and Reporting Services | Manage Outsource Services",
    description:
      "Accurate and scalable accounting and reporting services tailored to meet compliance standards and business needs. Powered by the experts at Manage Outsource Services.",
    url: "https://www.manageoutsourceservices.com/services/accounting-and-reporting",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/services-accounting-preview.webp",
        width: 1200,
        height: 630,
        alt: "Accounting and Reporting Services - Manage Outsource Services",
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
    title: "Accounting and Reporting Services | Manage Outsource Services",
    description:
      "Streamline your financial operations with our outsourced accounting and reporting services. Trusted by growing businesses for accuracy and compliance.",
    images: ["/images/services-accounting-preview.webp"],
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
    canonical:
      "https://www.manageoutsourceservices.com/services/accounting-and-reporting",
  },

  category: "Accounting Services",
  datePublished: "2025-08-07",
};

export default function AccountingAndReporting() {
  // hero section data --------------------------------------------------------------
  let herosectiontitle = Accherodata.accountingandreporting.title;
  let herosectionparagraph = Accherodata.accountingandreporting.paragraph;
  let herosectiontextOrientation =
    Accherodata.accountingandreporting.textOrientation;
  let herosectionbackground =
    Accherodata.accountingandreporting.backgroundImages;
  //--------------------------------------------------------------------------------

  // main heading data -------------------------------------------------------------
  let mainheadingtitle = Accfirstsdata.AccountingandReporting.title;
  let mainheadingdescription = Accfirstsdata.AccountingandReporting.description;
  let mainheadingtagtext = Accfirstsdata.AccountingandReporting.tagtext;
  let mainheadingbackgrounds =
    Accfirstsdata.AccountingandReporting.backgroundImages;
  //--------------------------------------------------------------------------------

  // card grid data------------------------------------------------------------------
  let gridcards = AcccardData.AccountingandReporting.cards;
  //---------------------------------------------------------------------------------

  // methodology data ---------------------------------------------------------------
  let Methodologysectdata = AccMethoddata.AccountingandReporting;
  //---------------------------------------------------------------------------------

  // second main heading data -------------------------------------------------------
  let herosectionsecondtitle = AccSeconddata.AccountingandReportingsecond.title;
  let herosectionsecondparagraph =
    AccSeconddata.AccountingandReportingsecond.description;
  let herosectionsecondtextOrientation =
    AccSeconddata.AccountingandReportingsecond.tagtext;
  let herosecondsectionbackground =
    AccSeconddata.AccountingandReportingsecond.backgroundImages;
  //----------------------------------------------------------------------------------

  // Advantegse section data----------------------------------------------------------
  let advantagesdata = Accadvdata.accountingandreportingadvantages.cards;
  //----------------------------------------------------------------------------------

  return (
    <>
      <Script
        id="jsonld-accountingandreportingpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Accountingandreportingjsonld),
        }}
      />
      ;
      <FeaturesTypeTwo
        herosectiontitle={herosectiontitle}
        herosectionparagraph={herosectionparagraph}
        herosectiontextOrientation={herosectiontextOrientation}
        herosectionbackground={herosectionbackground}
        mainheadingtitle={mainheadingtitle}
        mainheadingdescription={mainheadingdescription}
        mainheadingtagtext={mainheadingtagtext}
        mainheadingbackgrounds={mainheadingbackgrounds}
        gridcards={gridcards}
        Methodologysectdata={Methodologysectdata}
        Calltoactiondata={Calltoactiondata}
        herosectionsecondtitle={herosectionsecondtitle}
        herosectionsecondparagraph={herosectionsecondparagraph}
        herosectionsecondtextOrientation={herosectionsecondtextOrientation}
        herosecondsectionbackground={herosecondsectionbackground}
        advantagesdata={advantagesdata}
      />
    </>
  );
}
