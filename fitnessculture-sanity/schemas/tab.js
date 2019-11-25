export default {
  name: 'tab',
  title: 'Tab',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'string'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    },
  }
}