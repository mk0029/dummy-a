import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Lodha - India's Leading Real Estate Developer | World's Finest Developments",
  description: "Lodha is India's no.1 real-estate developer offering the best residential and commercial properties in Mumbai, Thane, Pune, Bangalore & London. Visit now and buy your dream home!",
  metadataBase: new URL("https://lodha-group.vercel.app/"),
  openGraph: {
    title: "Lodha - India's Leading Real Estate Developer | World's Finest Developments",
    description:
      "Lodha is India's no.1 real-estate developer offering the best residential and commercial properties in Mumbai, Thane, Pune, Bangalore & London. Visit now and buy your dream home!",
    images: "/assets/images/home-meta-img.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
