import Link from "next/link"
import Image from "next/image"
import LogoIcon from "@/public/printforge-logo-icon.svg"
import Logo from "@/public/printforge-logo.svg"
import NavLink from "@/app/components/NavLink"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/" className="hidden cursor-pointer sm:block">
        <Image src={Logo} alt="PrintForge Logo" width={240} height={61} />
      </Link>
      <Link href="/" className="cursor-pointer sm:hidden">
        <Image src={LogoIcon} alt="PrintForge Logo" width={40} height={40} />
      </Link>

      <nav className="flex gap-4 text-sm text-gray-500 uppercase md:text-md md:gap-8">
        <NavLink href="/3d-models">3D Models</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  )
}