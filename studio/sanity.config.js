import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { table } from '@sanity/table'
import { schemaTypes } from './schemaTypes'
import PostPreview from './preview/PostPreview'

export default defineConfig({
  name: 'default',
  title: 'Rose Njeru Blog',

  // Keep the projectId and dataset that "npm create sanity" generated for you. Paste them here if you replace this file.
  projectId: 'sc32t6qp',
  dataset: 'production',

  plugins: [
    structureTool({
      // Every blog post gets a second tab, "Live preview", next to the editor.
      defaultDocumentNode: (S, { schemaType }) =>
        schemaType === 'post'
          ? S.document().views([S.view.form(), S.view.component(PostPreview).title('Live preview')])
          : S.document().views([S.view.form()]),
    }),
    visionTool(),
    table(),
  ],
  schema: { types: schemaTypes },
})