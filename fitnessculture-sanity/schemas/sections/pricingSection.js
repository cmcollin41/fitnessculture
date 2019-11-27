export default {
  title: 'Pricing Section',
  name: 'pricingSection',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }, 
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }, 
    {
      title: 'Pricing',
      name: 'pricing',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'price'}
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Pricing Section`
      }
    }
  }
}