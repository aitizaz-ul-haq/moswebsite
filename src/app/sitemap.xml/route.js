import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.manageoutsource.com/";

  const staticPages = [
    "", // Home
    "about",
    "services",
    "services/accountingandreporting",
    "services/itconsultancy",
    "services/webdevelopment",
    "industries",
    "team",
    "careers",
    "contact"
  ];

  const urls = staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
