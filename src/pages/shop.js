import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Sku from '../components/Products/Sku'

const Shop = () => (
  <Layout>
    <SEO title="Shop" />
    <h1>Shop</h1>
    <div className="container mx-auto my-10">
      <Sku />
    </div>
    
  </Layout>
)

export default Shop