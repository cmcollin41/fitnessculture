export default {
  name: 'basic',
  title: 'Basic',
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
      name: 'offerBenefits',
      title: 'Offer Benefits',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}]
    },
    {
      name: 'offerImg',
      title: 'Offer Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'offerTitle',
      title: 'Offer Title',
      type: 'string'
    },
    {
      name: 'offerSummary',
      title: 'Offer Summary',
      type: 'text'
    },
    {
      name: 'appTitle',
      title: 'App Title',
      type: 'string'
    },
    {
      name: 'appDescription',
      title: 'App Description',
      type: 'text'
    },
    {
      name: 'appVideo',
      title: 'App Video',
      type: 'file'
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'question'}}]
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