import ModelsGrid from "@/app/components/ModelsGrid"
import type { Model, ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page({ searchParams }: ModelsPageProps) {
  const { query } = await searchParams
  const models = await getModels()

  const filterdModels = query ? models.filter((model: Model) => {
    const nameIncludesQuery = model.name.toLowerCase().includes(query.toLowerCase())
    const descriptionIncludesQuery = model.description.toLowerCase().includes(query.toLowerCase())
    return nameIncludesQuery || descriptionIncludesQuery
  }) : models

  return (
    <>
      <form>
        <label className="sr-only">Search for 3d models</label>
        <input
          type="text"
          name="query"
          placeholder="Search for 3d models"
          className="w-11/12 px-4 py-2 mt-2 ml-4 border border-gray-300 rounded-md lg:max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={query ?? ""}
          autoComplete="off"
        />
      </form>
      <ModelsGrid title="3D Models" models={filterdModels} />
    </>
  )
}
