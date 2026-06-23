import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./src/sanity/schemas"
import { projectId, dataset } from "./src/sanity/env"

export default defineConfig({
  basePath: "/corretor-imoveis/studio",
  projectId,
  dataset,
  title: "Painel Danielle Corrêa",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
  ],
})
