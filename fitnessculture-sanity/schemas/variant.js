export default {
  name: 'variant',
  title: 'Variant',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'altTag',
      title: 'Alt Tag',
      type: 'string'
    },
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'string'
    },
  ]
}