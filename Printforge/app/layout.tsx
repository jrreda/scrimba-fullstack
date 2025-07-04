import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between p-4">
          <Link href="/" className="hidden cursor-pointer sm:block">
            <img src="/printforge-logo.svg" alt="PrintForge Logo" width={240} />
          </Link>
          <Link href="/" className="cursor-pointer sm:hidden">
            <img src="/printforge-logo-icon.svg" alt="PrintForge Logo" width={40} />
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
