export default {
  name: 'subscribe',
  title: 'Subscribe',
  type: 'document',
  fields: [
    {
      name: 'active',
      title: 'Active',
      type: 'boolean'
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
    },
    {
      name: 'formID',
      title: 'Form ID',
      type: 'string'
    },
    {
      name: 'cta',
      title: 'Form CTA',
      type: 'string'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}]
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'text'
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'heroImage'
    },
  }
}