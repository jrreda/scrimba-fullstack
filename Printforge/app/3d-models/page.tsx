import Form from 'next/form'
import ModelsGrid from "@/app/components/ModelsGrid"
import type { Model, ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page({ searchParams }: ModelsPageProps) {
  const { query } = await searchParams || {}
  const models = await getModels()

  const filterdModels = query ? models.filter((model: Model) => {
    const nameIncludesQuery = model.name.toLowerCase().includes(query.toLowerCase())
    const descriptionIncludesQuery = model.description.toLowerCase().includes(query.toLowerCase())
    return nameIncludesQuery || descriptionIncludesQuery
  }) : models

  return (
    <>
      <Form action={'/3d-models'} className="flex items-center justify-center w-full py-4">
        <label className="sr-only">Search for 3d models</label>
        <input
          type="text"
          name="query"
          placeholder="Search for 3d models..."
          className="w-11/12 py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
          defaultValue={query ?? ""}
          autoComplete="off"
        />
      </Form>
      <ModelsGrid title="3D Models" models={filterdModels} />
    </>
  )
}
