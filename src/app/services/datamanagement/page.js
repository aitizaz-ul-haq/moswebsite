// importing tools
import Script from "next/script";

// importing componenet data
import DataMagdata from "@/app/data/shareddata/hersectiondata.json";
import DataMagsolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import OpSupMehodologydata from "@/app/data/homedata/homecardcollectiondata.json";
import Mainheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Datamanagementjsonld from "@/app/data/jsonld/datamanagement.json";

// importing page component
import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";


export const metadata = {
  title: "Data Management Services | Manage Outsource Services",
  description:
    "Manage Outsource Services provides reliable data management services, ensuring secure handling, organisation, and accessibility of critical business information for operational efficiency and informed decision-making.",
  keywords: [
    "Data Management Services",
    "Manage Outsource Services",
    "Business Data Solutions",
    "Secure Data Handling",
    "Data Storage and Access",
    "Information Management",
    "Data Structuring",
    "Remote Data Support",
    "Enterprise Data Solutions",
    "Business Information Management",
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
    title: "Data Management Services | Manage Outsource Services",
    description:
      "Unlock the value of your business data with our secure and structured data management services. Organise, protect, and optimise with Manage Outsource Services.",
    url: "https://www.manageoutsourceservices.com/services/data-management",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/services-datamanagement-preview.webp",
        width: 1200,
        height: 630,
        alt: "Data Management Services - Manage Outsource Services",
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
    title: "Data Management Services | Manage Outsource Services",
    description:
      "Structured and secure data management services designed to support business operations and improve information flow across your organisation.",
    images: ["/images/services-datamanagement-preview.webp"],
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
      "https://www.manageoutsourceservices.com/services/data-management",
  },

  category: "Data Services",
  datePublished: "2025-08-07",
};

export default function DataManagement() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = DataMagdata.datamang.title;
  let Webdevheropara = DataMagdata.datamang.paragraph;
  let Webdevherotextorientation = DataMagdata.datamang.textOrientation;
  let Webdevherobackgroundimage = DataMagdata.datamang.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------

  let Solutionscards = DataMagsolutionscarddata.datamanagement.cards;
  let Solutionscardstitle =
    DataMagsolutionscarddata.datamanagement.sectiontitle;
  let Solutionscardsdescriptions =
    DataMagsolutionscarddata.datamanagement.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Mainheadingsectiondata.datamanagement.title;
  let Mainheadingdescription =
    Mainheadingsectiondata.datamanagement.description;
  let Mainheadingtagtext = Mainheadingsectiondata.datamanagement.tagtext;
  let Mainheadingbackgroundimages =
    Mainheadingsectiondata.datamanagement.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata = OpSupMehodologydata.datamanagementmethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.datamanagement;

  return (
    <>
      <Script
        id="jsonld-datamanagementpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Datamanagementjsonld),
        }}
      />
      <FeaturesTypeOne
        Webdevherotitle={Webdevherotitle}
        Webdevheropara={Webdevheropara}
        Webdevherotextorientation={Webdevherotextorientation}
        Webdevherobackgroundimage={Webdevherobackgroundimage}
        Solutionscards={Solutionscards}
        Solutionscardstitle={Solutionscardstitle}
        Solutionscardsdescriptions={Solutionscardsdescriptions}
        Mainheadingtitle={Mainheadingtitle}
        Mainheadingdescription={Mainheadingdescription}
        Mainheadingtagtext={Mainheadingtagtext}
        Mainheadingbackgroundimages={Mainheadingbackgroundimages}
        Methodscarddata={Methodscarddata}
        Calltoactiondata={Calltoactiondata}
        Advantagessectdata={Advantagessectdata}
      />
    </>
  );
}
