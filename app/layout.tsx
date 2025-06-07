import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "recipe finder app using Next.js and Spoonacular API",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon2.svg" type="svg" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
