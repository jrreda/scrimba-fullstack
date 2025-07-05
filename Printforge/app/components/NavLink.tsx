import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm text-gray-700 uppercase transition-colors rounded-md cursor-pointer whitespace-nowrap hover:text-orange-accent"
    >{children}</Link>
  )
}