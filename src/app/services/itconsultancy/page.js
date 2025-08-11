export const dynamic = "force-static";
export const revalidate = false;

// importing tools
import Script from "next/script";

// import componenet data
import ItConsultdata from "@/app/data/shareddata/hersectiondata.json";
import ItConsultancysolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import ItConsultancyMehodologydata from "@/app/data/homedata/homecardcollectiondata.json";
import Methodologysectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Itconsultingjsonld from "@/app/data/jsonld/itconsulting.json";

// import main componenet
import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";

export const metadata = {
  title: "IT Consulting Services | Manage Outsource Services",
  description:
    "Manage Outsource Services delivers expert IT consulting solutions to streamline operations, enhance security, and align technology with business goals.",
  keywords: [
    "IT Consulting Services",
    "Technology Strategy",
    "Manage Outsource Services",
    "Outsourced IT Support",
    "Business IT Solutions",
    "IT Infrastructure",
    "Cybersecurity Consulting",
    "Enterprise IT Services",
    "IT Compliance",
    "Digital Transformation Consulting",
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
    title: "IT Consulting Services | Manage Outsource Services",
    description:
      "Strategic IT consulting tailored to your business needs — from infrastructure planning to cybersecurity and digital transformation.",
    url: "https://www.manageoutsource.com/services/itconsultancy",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "https://www.manageoutsource.com/images/mos_itconsultingpage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "IT Consulting Services - Manage Outsource Services",
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
    title: "IT Consulting Services | Manage Outsource Services",
    description:
      "Partner with us for professional IT consulting services designed to optimise operations and drive innovation.",
    images: [
      "https://www.manageoutsource.com/images/mos_itconsultingpage_preview_image.webp",
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
    canonical: "https://www.manageoutsource.com/services/itconsultancy",
  },

  category: "IT Services",
  datePublished: "2025-08-07",
};

export default function ItConsultancy() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = ItConsultdata.itconsultancy.title;
  let Webdevheropara = ItConsultdata.itconsultancy.paragraph;
  let Webdevherotextorientation = ItConsultdata.itconsultancy.textOrientation;
  let Webdevherobackgroundimage = ItConsultdata.itconsultancy.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------
  let Solutionscards = ItConsultancysolutionscarddata.itconsultancy.cards;
  let Solutionscardstitle =
    ItConsultancysolutionscarddata.itconsultancy.sectiontitle;
  let Solutionscardsdescriptions =
    ItConsultancysolutionscarddata.itconsultancy.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Methodologysectiondata.itconsultancy.title;
  let Mainheadingdescription = Methodologysectiondata.itconsultancy.description;
  let Mainheadingtagtext = Methodologysectiondata.itconsultancy.tagtext;
  let Mainheadingbackgroundimages =
    Methodologysectiondata.itconsultancy.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata =
    ItConsultancyMehodologydata.itconsultancymethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.itconsultancy;

  return (
    <>
      <Script
        id="jsonld-itconsultingpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Itconsultingjsonld) }}
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
