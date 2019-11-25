export default {
  name: 'basicCTA',
  title: 'Basic CTA',
  type: 'document',
  fields: [
    {
      title: 'Link',
      name: 'link',
      type: 'string'
    },
    {
      title: 'Action',
      name: 'action',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'action',
    },
  }
}
