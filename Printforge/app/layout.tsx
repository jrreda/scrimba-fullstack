import Link from "next/link";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import Logo from "@/public/printforge-logo.svg";
import LogoIcon from "@/public/printforge-logo-icon.svg";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-7xl ${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="flex items-center justify-between p-4">
          <Link href="/" className="hidden cursor-pointer sm:block">
            <Image src={Logo} alt="PrintForge Logo" width={240} height={61} />
          </Link>
          <Link href="/" className="cursor-pointer sm:hidden">
            <Image src={LogoIcon} alt="PrintForge Logo" width={40} height={40} />
          </Link>

          <nav className="flex gap-4 text-sm text-gray-500 uppercase md:text-md md:gap-8">
            <Link className="cursor-pointer active:text-orange-600 hover:text-orange-600 hover:underline underline-offset-8" href="/models">3D Models</Link>
            <Link className="cursor-pointer active:text-orange-600 hover:text-orange-600 hover:underline underline-offset-8" href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
