// app/contact/page.tsx (or page.js)

// Optional: lock this page to SSG
export const dynamic = "force-static";
export const revalidate = false;

import Script from "next/script";
import nextDynamic from "next/dynamic";

// ---- data ----
import ContactHeroData from "@/app/data/shareddata/hersectiondata.json";
import Connectheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Contactpagejsonld from "@/app/data/jsonld/contactpage.json";

// ---- eager (above-the-fold) ----
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";

// ---- lazy (code-split, still SSG; no placeholders) ----
const MainHeadingSection = nextDynamic(
  () =>
    import(
      "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection"
    ),
  { loading: () => null }
);

const ContactFormSection = nextDynamic(
  () =>
    import(
      "../components/pagecomponents/contactpagecomponents/contactformsection"
    ),
  { loading: () => null }
);

export const metadata = {
  title: "Contact Us | Manage Outsource Services",
  description:
    "Get in touch with Manage Outsource Services for enquiries about IT consultancy, web development, and accounting solutions. Reach out via our contact form or connect directly with our team.",
  keywords: [
    "Contact Manage Outsource Services",
    "Business Enquiries",
    "Outsourcing Support",
    "Get in Touch",
    "Contact Form",
    "Client Communication",
    "Business Consultancy Contact",
    "Web Development Support",
    "Accounting Services Contact",
    "Outsourcing Company Pakistan",
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
    title: "Contact Us | Manage Outsource Services",
    description:
      "Need help with IT, development, or accounting services? Contact our team today and we’ll respond promptly to your business needs.",
    url: "https://www.manageoutsource.com/contact",
    siteName: "Manage Outsource Services",
    images: [
      {
        url: "https://www.manageoutsource.com/images/mos_contactpage_preview_image.webp",
        width: 1200,
        height: 630,
        alt: "Manage Outsource Services - Contact Page Preview",
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
    title: "Contact Us | Manage Outsource Services",
    description:
      "Have a question or project? Contact Manage Outsource Services for professional support in IT consultancy, development, and accounting.",
    images: [
      "https://www.manageoutsource.com/images/mos_contactpage_preview_image.webp",
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
    canonical: "https://www.manageoutsource.com/contact",
  },

  category: "Contact",
  datePublished: "2025-08-07",
};

export default function Connect() {
  return (
    <>
      <Script
        id="jsonld-contactpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Contactpagejsonld) }}
      />
      <MainPageHeroSection
        title={ContactHeroData.connect.title}
        paragraph={ContactHeroData.connect.paragraph}
        textOrientation={ContactHeroData.connect.textOrientation}
        backgroundImages={ContactHeroData.connect.backgroundImages}
      />
      <MainHeadingSection
        title={Connectheadingsectiondata.connect.title}
        description={Connectheadingsectiondata.connect.description}
        tagtext={Connectheadingsectiondata.connect.tagtext}
        backgroundImages={Connectheadingsectiondata.connect.backgroundImages}
      />
      <ContactFormSection />
    </>
  );
}
