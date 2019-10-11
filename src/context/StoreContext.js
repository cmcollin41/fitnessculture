import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOPIFY_SHOP_NAME}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  cartQuantity: 0,
  cartPreview: false,
  products: [],
  shop: {},
  setCartQuantity: () => {},
  setCartPreview: () => {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext