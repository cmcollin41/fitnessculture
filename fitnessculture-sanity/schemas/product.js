export default {
  name: 'product',
  title: 'Product',
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
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
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
    {
      name: 'shopifyId',
      title: 'Shopify ID',
      type: 'string'
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'variant'}}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'sizing',
      title: 'Sizing Guide',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'shipping',
      title: 'Shipping & Returns',
      type: 'array', 
      of: [{type: 'block'}]
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
      name: 'colorOne',
      title: 'Color one',
      type: 'color'
    },
    {
      name: 'colorTwo',
      title: 'Color two',
      type: 'color'
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string'
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
      title: 'name',
      media: 'openGraphImage',
    },
  },
};

// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'video',
//       title: 'Video',
//       type: 'file'
//     },
//     {
//       name: 'productBenefits',
//       title: 'Product Benefits',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'priceBenefit'}}]
//     },
//     {
//       name: 'attributes',
//       title: 'Attributes',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'attribute'}}]
//     },
//     {
//       name: 'benefits',
//       title: 'Benefits',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'benefit'}}]
//     },
//     {
//       name: 'stats',
//       title: 'Stats',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'stat'}}]
//     },
//     {
//       name: 'guarantees',
//       title: 'Guarantees',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'guarantee'}}]
//     },
//     {
//       name: 'steps',
//       title: 'Steps',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'step'}}]
//     }
//     {
//       name: 'testimonials',
//       title: 'Testimonials',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'testimonial'}}]
//     },
//     {
//       name: 'variants',
//       title: 'Variants',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'variant'}}]
//     },
//     {
//       name: 'questions',
//       title: 'Questions',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'question'}}]
//     },
//     {
//       name: 'password',
//       title: 'Password',
//       type: 'string'
//     },
//   ],
// }

