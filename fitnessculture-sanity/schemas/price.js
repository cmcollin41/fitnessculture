export default {
  name: 'price',
  title: 'Price',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'priceBenefit'}}]
    },
    {
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [
        {type: 'basicCTA'},
        {type: 'downloadCTA'},
      ],
    },
  ]
}