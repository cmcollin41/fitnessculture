export default {
  title: 'Block Text',
  name: 'blockText',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent'
    },
    {
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'text-left'},
          {title: 'Right', value: 'text-right'},
          {title: 'Center', value: 'text-center'}
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      }
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
        title: `Rich Text`
      }
    }
  }
}