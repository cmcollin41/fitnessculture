// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import program from './program';
import author from './author';
import page from './page';
import testimonial from './testimonial';
import question from './question';
import benefit from './benefit';
import persona from './persona';
import exercise from './exercise';
import technique from './technique';
import feature from './feature';
import attribute from './attribute';
import index from './index';
import about from './about';
import programPage from './programPage';
import shop from './shop';
import guarantee from './guarantee';
import priceBenefit from './priceBenefit'
import basic from './lpages/basic'
import subscribe from './lpages/subscribe'
import h3p from './lpages/h3p';
import product from './product';
import variant from './variant';
import stat from './stat';
import step from './step';
import landingPage from './landingPage';


import blockVideo from './blocks/blockVideo';
import dripForm from './blocks/dripForm';
import tab from './tab';
import price from './price';
import proof from './proof';

import blockImage from './blocks/blockImage';
import blockText from './blocks/blockText';

import statSection from './sections/statSection';
import testimonialSection from './sections/testimonialSection';
import programSection from './sections/programSection';
import faqSection from './sections/faqSection';
import pricingSection from './sections/pricingSection';
import blockSection from './sections/blockSection';
import heroSection from './sections/heroSection';
import socialProofSection from './sections/socialProofSection';
import tabSection from './sections/tabSection';
import beforeAfterSection from './sections/beforeAfterSection';
import basicCTA from './CTAs/basicCTA';
import downloadCTA from './CTAs/downloadCTA';
import programHeroSection from './sections/programHeroSection';
import stepSection from './sections/stepSection';
import guaranteeSection from './sections/guaranteeSection';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    index,
    about,
    programPage,
    landingPage,
    post,
    program,
    shop,
    author,
    category,
    page,
    testimonial,
    question,
    benefit,
    guarantee,
    persona,
    exercise,
    technique,
    attribute,
    feature,
    priceBenefit,
    basic,
    subscribe,
    product,
    variant,
    h3p,
    stat,
    step,
    price,
    blockImage,
    blockText,
    blockVideo,
    proof,
    tab,
    dripForm,
    basicCTA,
    downloadCTA,
    
  

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    statSection,
    testimonialSection,
    programSection,
    faqSection,
    pricingSection,
    blockSection,
    heroSection,
    socialProofSection,
    tabSection,
    beforeAfterSection,
    programHeroSection,
    stepSection,
    guaranteeSection

  ])
})
