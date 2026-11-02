import { defineArrayMember, defineField, defineType } from 'sanity'

/* The "page" Rose writes in: paragraphs, headings 1-6, quotes, lists, links, pictures, videos, tables,
   dividers, code blocks and buttons.
   Note: the post title is the page's real H1. On the website "Heading 1" is drawn at H1 size but marked up as a
   section heading, so Google still sees exactly one H1. */
export default defineType({
  name: 'blockContent',
  title: 'Post content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal text', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Heading 5', value: 'h5' },
        { title: 'Heading 6', value: 'h6' },
        { title: 'Quote', value: 'quote' },
        { title: 'Highlighted box', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet list', value: 'bullet' },
        { title: 'Numbered list', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strikethrough', value: 'strike-through' },
          { title: 'Highlight', value: 'highlight' },
          { title: 'Formula / code style', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                type: 'string',
                title: 'Link address',
                description: 'Another site: paste the full address (https://...). A page on this site: type it like /services or /blog/my-post.',
                validation: (rule) =>
                  rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true }),
              }),
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: 'image',
      title: 'Picture',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Describe the picture',
          description: 'One short sentence for screen readers and Google. Required.',
          validation: (rule) => rule.required().error('Please describe the picture.'),
        }),
        defineField({ name: 'caption', type: 'string', title: 'Caption (optional)' }),
      ],
    }),

    defineArrayMember({
      name: 'videoEmbed',
      type: 'object',
      title: 'Video from YouTube or Vimeo (recommended)',
      fields: [
        defineField({
          name: 'url',
          type: 'url',
          title: 'Video link',
          description: 'Paste the normal YouTube or Vimeo link.',
          validation: (rule) =>
            rule.required().uri({ scheme: ['https'] }).custom((value) =>
              !value || /(youtube\.com|youtu\.be|vimeo\.com)/.test(value) ? true : 'Only YouTube and Vimeo links work here.',
            ),
        }),
        defineField({ name: 'caption', type: 'string', title: 'Caption (optional)' }),
      ],
      preview: { select: { title: 'url', subtitle: 'caption' }, prepare: ({ title, subtitle }) => ({ title: subtitle || title, subtitle: 'Video (YouTube/Vimeo)' }) },
    }),

    defineArrayMember({
      name: 'videoFile',
      type: 'object',
      title: 'Video file upload (short clips only)',
      fields: [
        defineField({
          name: 'file',
          type: 'file',
          title: 'Video file',
          description: 'MP4 works best. For anything longer than a couple of minutes, upload to YouTube and use the YouTube option instead.',
          options: { accept: 'video/*' },
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'caption', type: 'string', title: 'Caption (optional)' }),
      ],
      preview: { select: { title: 'caption' }, prepare: ({ title }) => ({ title: title || 'Uploaded video', subtitle: 'Video file' }) },
    }),

    defineArrayMember({ type: 'table', title: 'Table' }),

    defineArrayMember({
      name: 'divider',
      type: 'object',
      title: 'Divider line',
      fields: [defineField({ name: 'style', type: 'string', hidden: true, initialValue: 'line' })],
      preview: { prepare: () => ({ title: '────────  Divider line  ────────' }) },
    }),

    defineArrayMember({
      name: 'codeBlock',
      type: 'object',
      title: 'Code or text block',
      fields: [
        defineField({ name: 'code', type: 'text', rows: 8, title: 'Code or text', validation: (rule) => rule.required() }),
        defineField({ name: 'filename', type: 'string', title: 'Caption (optional)', description: 'For example: "Example prompt" or "n8n webhook settings".' }),
      ],
      preview: { select: { title: 'code', subtitle: 'filename' }, prepare: ({ title, subtitle }) => ({ title: (title || '').slice(0, 60), subtitle: subtitle || 'Code or text block' }) },
    }),

    defineArrayMember({
      name: 'ctaButton',
      type: 'object',
      title: 'Button',
      fields: [
        defineField({ name: 'label', type: 'string', title: 'Button text', description: 'For example: Book a free consultation', validation: (rule) => rule.required() }),
        defineField({
          name: 'href',
          type: 'string',
          title: 'Where it goes',
          description: 'A page on this site, like /consultation, or a full address starting with https://',
          validation: (rule) => rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true }),
        }),
        defineField({
          name: 'style',
          type: 'string',
          title: 'Look',
          options: { list: [{ title: 'Solid blue', value: 'primary' }, { title: 'Outline', value: 'secondary' }], layout: 'radio' },
          initialValue: 'primary',
        }),
      ],
      preview: { select: { title: 'label', subtitle: 'href' }, prepare: ({ title, subtitle }) => ({ title: `Button: ${title || ''}`, subtitle }) },
    }),
  ],
})