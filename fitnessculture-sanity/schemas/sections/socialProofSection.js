export default {
  title: 'Social Proof Section',
  name: 'socialProofSection',
  type: 'object',
  fields: [
    {
      title: 'Social Proof',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'proof'}
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Social Proof Section`
      }
    }
  }
}