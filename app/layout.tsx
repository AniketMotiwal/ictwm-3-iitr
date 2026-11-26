import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { conference } from "@/lib/siteData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${conference.shortName} | IIT Roorkee | ${conference.dates}`,
  description: `${conference.fullTitle}, ${conference.dates}, ${conference.venue}.`,
  keywords: [
    "Waste Management Conference",
    "Circular Economy",
    "Energy Sustainability",
    "IIT Roorkee Conference 2027",
    "Waste to Energy",
    "International Conference India",
  ],
  icons: { icon: "/images/conference-logo.svg" },
  openGraph: {
    title: `${conference.shortName} — ${conference.titleLine1}`,
    description: `${conference.dates} · ${conference.venueShort}`,
    images: ["/images/slider/admin-block.jpg"],
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = { themeColor: "#003d7a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
