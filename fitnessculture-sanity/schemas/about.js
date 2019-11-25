export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
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
      name: 'story',
      title: 'Story',
      type: 'blockContent'
    },
    {
      name: 'trainingTitle',
      title: 'Training Title',
      type: 'string'
    },
    {
      name: 'trainingDescription',
      title: 'Training Description',
      type: 'text'
    },
    {
      name: 'trainingImage',
      title: 'Training Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mobilityTitle',
      title: 'Mobility Title',
      type: 'string'
    },
    {
      name: 'mobilityDescription',
      title: 'Mobility Description',
      type: 'text'
    },
    {
      name: 'mobilityImage',
      title: 'Mobility Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'nutritionTitle',
      title: 'Nutrition Title',
      type: 'string'
    },
    {
      name: 'nutritionDescription',
      title: 'Nutrition Description',
      type: 'text'
    },
    {
      name: 'nutritionImage',
      title: 'Nutrition Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}