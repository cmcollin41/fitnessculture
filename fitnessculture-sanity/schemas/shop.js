export default {
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true
      }
    }, 
    {
      name: 'apparelTitle',
      title: 'Apparel Title',
      type: 'string'
    },
    {
      name: 'apparelSubtitle',
      title: 'Apparel Subtitle',
      type: 'text'
    },
    {
      name: 'apparelImage',
      title: 'Apparel Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }, 
    {
      name: 'ebookTitle',
      title: 'Ebook Title',
      type: 'string'
    },
    {
      name: 'ebookSubtitle',
      title: 'Ebook Subtitle',
      type: 'text'
    },
    {
      name: 'ebookImage',
      title: 'Ebook Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'heroImage'
    }
  }
}