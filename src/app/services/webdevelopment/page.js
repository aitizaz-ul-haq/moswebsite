// importing tools
import Script from "next/script";

// importing component data
import Webdevdata from "@/app/data/shareddata/hersectiondata.json";
import Webdevsolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import WebDevMethodologyCardsdata from "@/app/data/homedata/homecardcollectiondata.json";
import Mainheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Webdevelopmentjsonld from "@/app/data/jsonld/webdevelopmentpage.json";

// importing componenets
import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";

export const metadata = {
  title: "Web Development Services | Manage Outsource Services",
  description:
    "Manage Outsource Services offers custom web development solutions designed to improve performance, user experience, and digital presence for businesses across industries.",
  keywords: [
    "Web Development Services",
    "Custom Web Solutions",
    "Manage Outsource Services",
    "Responsive Website Design",
    "Business Website Development",
    "Enterprise Web Applications",
    "Full Stack Development",
    "Frontend and Backend Services",
    "UI/UX Optimisation",
    "Outsourced Web Development",
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
    title: "Web Development Services | Manage Outsource Services",
    description:
      "Enhance your business's digital presence with custom web development from Manage Outsource Services. Built for performance, scalability, and results.",
    url: "https://www.manageoutsourceservices.com/services/web-development",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "/images/mos_webdevelopmentpage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "Web Development Services - Manage Outsource Services",
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
    title: "Web Development Services | Manage Outsource Services",
    description:
      "Professional web development solutions tailored for business success — secure, scalable, and fully responsive. Powered by Manage Outsource Services.",
    images: ["/images/mos_webdevelopmentpage_preview_image.webp"],
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
      "https://www.manageoutsourceservices.com/services/web-development",
  },

  category: "Web Development Services",
  datePublished: "2025-08-07",
};

export default function WebDevelopment() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = Webdevdata.webdevelopment.title;
  let Webdevheropara = Webdevdata.webdevelopment.paragraph;
  let Webdevherotextorientation = Webdevdata.webdevelopment.textOrientation;
  let Webdevherobackgroundimage = Webdevdata.webdevelopment.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------
  let Solutionscards = Webdevsolutionscarddata.webdevelopment.cards;
  let Solutionscardstitle = Webdevsolutionscarddata.webdevelopment.sectiontitle;
  let Solutionscardsdescriptions =
    Webdevsolutionscarddata.webdevelopment.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Mainheadingsectiondata.webdev.title;
  let Mainheadingdescription = Mainheadingsectiondata.webdev.description;
  let Mainheadingtagtext = Mainheadingsectiondata.webdev.tagtext;
  let Mainheadingbackgroundimages =
    Mainheadingsectiondata.webdev.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata = WebDevMethodologyCardsdata.webdevmethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.webdev;

  return (
    <>
      <Script
        id="jsonld-webdevelopmentpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Webdevelopmentjsonld) }}
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
