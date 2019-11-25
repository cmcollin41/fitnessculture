export default {
  name: 'downloadCTA',
  title: 'Download CTA',
  type: 'document',
  fields: [
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
