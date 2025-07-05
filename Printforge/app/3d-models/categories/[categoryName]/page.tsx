import { getCategoryBySlug } from "@/app/lib/categories"
import { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold">{category.displayName}</h1>
    </div>
  )
}