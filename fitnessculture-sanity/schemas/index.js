export default {
  name: 'indexPage',
  title: 'Index Page',
  type: 'document',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'beforeAfterSection'},
        {type: 'blockSection'},
        {type: 'faqSection'},
        {type: 'guaranteeSection'},
        {type: 'heroSection'},
        {type: 'pricingSection'},
        {type: 'programSection'},
        {type: 'programHeroSection'},
        {type: 'statSection'},
        {type: 'stepSection'},
        {type: 'socialProofSection'},
        {type: 'tabSection'},
        {type: 'testimonialSection'},
      ],
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      description: 'This is the title that populates meta-tags on the webpage',
      fieldset: 'metadata',
      options: {
        maxLength: 60
      },
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
      options: {
        maxLength: 160
      }
    },
    {
      name: 'metaKeywords',
      type: 'text',
      title: 'Meta Keywords',
      description: 'Comma separated keyword list for page meta-tags.',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};

// export default {
//   name: 'home',
//   title: 'Home',
//   type: 'document',
//   fields: [
//     {
//       name: 'heroImage',
//       title: 'Hero Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'heroVideo',
//       title: 'Hero Video',
//       type: 'file'
//     },
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string'
//     },
//     {
//       name: 'subtitle',
//       title: 'Subtitle',
//       type: 'text'
//     },
//     {
//       name: 'heroCta',
//       title: 'Hero CTA',
//       type: 'string'
//     },
//     {
//       name: 'heroLink',
//       title: 'Hero Link',
//       type: 'string'
//     },
//     {
//       name: 'heroColor',
//       title: 'Hero Color',
//       type: 'color'
//     },
//     {
//       name: 'trainingTitle',
//       title: 'Training Title',
//       type: 'string'
//     },
//     {
//       name: 'trainingDescription',
//       title: 'Training Description',
//       type: 'text'
//     },
//     {
//       name: 'trainingImage',
//       title: 'Training Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'nutritionTitle',
//       title: 'Nutrition Title',
//       type: 'string'
//     },
//     {
//       name: 'nutritionDescription',
//       title: 'Nutrition Description',
//       type: 'text'
//     },
//     {
//       name: 'nutritionImage',
//       title: 'Nutrition Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'mobilityTitle',
//       title: 'Mobility Title',
//       type: 'string'
//     },
//     {
//       name: 'mobilityDescription',
//       title: 'Mobility Description',
//       type: 'text'
//     },
//     {
//       name: 'mobilityImage',
//       title: 'Mobility Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'aboutTitle',
//       title: 'About Title',
//       type: 'string'
//     },
//     {
//       name: 'aboutDescription',
//       title: 'About Description',
//       type: 'text'
//     },
//     {
//       name: 'aboutImage',
//       title: 'About Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'personalTrainerTitle',
//       title: 'Personal Trainer Title',
//       type: 'string'
//     },
//     {
//       name: 'personalTrainerDescription',
//       title: 'Personal Trainer Description',
//       type: 'text'
//     },
//     {
//       name: 'personalTrainerImage',
//       title: 'Personal Trainer Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'programs',
//       title: 'Programs',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'program'}}]
//     },
//     {
//       name: 'testimonials',
//       title: 'Testimonials',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'testimonial'}}]
//     },
//     {
//       name: 'questions',
//       title: 'Questions',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'question'}}]
//     }
//   ],
// }