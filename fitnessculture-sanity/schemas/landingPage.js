// LandingPage.js
export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'active',
      title: 'Active',
      type: 'boolean'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
        {type: 'heroContainedSection'},
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