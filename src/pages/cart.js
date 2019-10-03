import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import Cart from '../components/Cart'


const CartPage = () => (
  <Layout>
    <SEO title="Shopping Cart" description="Secure Checkout"  />
    <Cart />
  </Layout>
)

export default CartPage