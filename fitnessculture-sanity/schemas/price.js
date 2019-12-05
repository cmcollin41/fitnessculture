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
      name: 'interval',
      title: 'Interval',
      type: 'string',
      options: {
        list: [
          {title: 'Per Month', value: 'Per Month'},
          {title: 'One-Time', value: 'One-Time'},
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