export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'member',
      title: 'Member',
      type: 'string'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'memberImage',
      title: 'memberImage',
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
          {title: 'Male', value: 'male'},
          {title: 'Female', value: 'female'},
          {title: 'All', value: 'all'}
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }
  ],
}