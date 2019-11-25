export default {
  title: 'Drip Form',
  name: 'dripForm',
  type: 'object',
  fields: [
    {
      name: 'formId',
      title: 'Form ID',
      type: 'string'
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'string'
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Drip Form`
      }
    }
  }
}