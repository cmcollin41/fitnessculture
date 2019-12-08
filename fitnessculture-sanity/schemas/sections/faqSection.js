export default {
  title: 'FAQ Section',
  name: 'faqSection',
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
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'question'}
        }
      ]
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
  ],
  preview: {
    prepare() {
      return {
        title: `FAQ Section`
      }
    }
  }
}