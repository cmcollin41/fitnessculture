export default {
  name: 'programPage',
  title: 'Programs Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
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
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'program'}}]
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}]
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'heroImage'
    }
  }
}