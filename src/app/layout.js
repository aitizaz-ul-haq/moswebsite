import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

import Header from "./components/layoutcomponents/header/header";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
