export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
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
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Men', value: 'men'},
          {title: 'Women', value: 'women'},
          {title: 'All', value: 'all'}
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
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
      name: 'basicCta',
      title: 'Basic CTA',
      type: 'string'
    },
    {
      name: 'premiumCta',
      title: 'Premium CTA',
      type: 'string'
    },
    {
      name: 'colorOne',
      title: 'Color one',
      type: 'color'
    },
    {
      name: 'colorTwo',
      title: 'Color two',
      type: 'color'
    },
    {
      name: 'appVideo',
      title: 'App Video',
      type: 'file'
    },
    {
      name: 'appDescription',
      title: 'App Description',
      type: 'text'
    },
    {
      name: 'appTitle',
      title: 'App Title',
      type: 'string'
    },
    {
      name: 'basicPrice',
      title: 'Basic Price',
      type: 'string'
    },
    {
      name: 'basicBenefits',
      title: 'Basic Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'priceBenefit'}}]
    },
    {
      name: 'premiumPrice',
      title: 'Premium Price',
      type: 'string'
    },
    {
      name: 'premiumBenefits',
      title: 'Premium Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'priceBenefit'}}]
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}]
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'benefit'}}]
    },
    {
      name: 'personas',
      title: 'Personas',
      type: 'array',
      of: [{type: 'reference', to: {type: 'persona'}}]
    },
    {
      name: 'exercises',
      title: 'Exercises',
      type: 'array',
      of: [{type: 'reference', to: {type: 'exercise'}}]
    },
    {
      name: 'techniques',
      title: 'Techniques',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technique'}}]
    },
    {
      name: 'attributes',
      title: 'Attributes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'attribute'}}]
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'reference', to: {type: 'feature'}}]
    },
    {
      name: 'guarantees',
      title: 'Guarantees',
      type: 'array',
      of: [{type: 'reference', to: {type: 'guarantee'}}]
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'question'}}]
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      description: 'This is the title that populates meta-tags on the webpage',
      fieldset: 'metadata',
      options: {
        maxLength: 60
      },
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
      options: {
        maxLength: 160
      }
    },
    {
      name: 'metaKeywords',
      type: 'text',
      title: 'Meta Keywords',
      description: 'Comma separated keyword list for page meta-tags.',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'title',
      gender: 'gender',
      media: 'heroImage'
    },
    prepare(selection) {
      const {gender} = selection
      return Object.assign({}, selection, {
        subtitle: gender && `${gender}`
      })
    }
  }
}