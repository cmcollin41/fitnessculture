export default {
  name: 'h3p',
  title: 'H3P Arms',
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
      name: 'offerBenefits',
      title: 'Offer Benefits',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'coachQuote',
      title: 'Coach Quote',
      type: 'text'
    },
    {
      name: 'coachImage',
      title: 'Coach Image',
      type: 'image'
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