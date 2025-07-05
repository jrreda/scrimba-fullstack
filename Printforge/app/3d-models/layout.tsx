import { getAllCategories } from "@/app/lib/categories"
import type { ReactNode } from "react"
import NavLink from "@/app/components/NavLink"

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories()

  return (
    <section className="relative flex flex-col lg:flex-row lg:gap-8">
      {/* Scrollable nav */}
      <nav
        className="sticky top-0 z-10 flex gap-6 p-4 overflow-x-auto bg-white no-scrollbar lg:fixed lg:top-36 lg:left-0 lg:w-56 lg:h-auto lg:flex-col lg:px-8"
      >
        <NavLink href="/3d-models" variant="border">All</NavLink>
        {categories.map(category => (
          <NavLink
            key={category.slug}
            href={`/3d-models/categories/${category.slug}`}
            variant="border"
          >
            {category.displayName}
          </NavLink>
        ))}
      </nav>


      {/* Content */}
      <div className="flex-1 lg:ml-52">{children}</div>
    </section>
  )
}
