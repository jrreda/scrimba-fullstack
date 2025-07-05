"use client"

import Link from "next/link"
import type { NavLinkProps } from "@/app/types"
import { usePathname } from "next/navigation"

export default function NavLink({ href, children, variant = "underline" }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname === href.slice(0, -1)

  const getActiveStyles = () => {
    if (variant === "border") {
      return isActive
        ? "text-orange-accent border-l-2 border-orange-accent"
        : "text-gray-700"
    }

    // Default underline variant
    return isActive
      ? "text-orange-accent underline underline-offset-8"
      : "text-gray-700"
  }
  const activeClass = getActiveStyles()

  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm uppercase transition-colors cursor-pointer whitespace-nowrap hover:text-orange-accent ${activeClass}`}
    >{children}</Link>
  )
}