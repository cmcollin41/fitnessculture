import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import Cart from '../components/Cart'


const CartPage = () => (
  <Layout>
    <SEO title="Contact Us" description="Contact Fitness Culture via email, phone call, or Facebook Messenger."  />
    <Cart />
  </Layout>
)

export default CartPage