import type { RootLayoutProps } from "@/app/types"
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Navbar from "@/app/components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-7xl ${albertSans.className} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
