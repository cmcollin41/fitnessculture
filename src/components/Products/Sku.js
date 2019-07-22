import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'


class Sku extends Component {
  state = {
    stripe: null,
  }

  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    const stripe = window.Stripe('pk_test_YpS64LAhfvlYxcoj6GUzfHw8008PYcu8fN')
    console.log('setting stripe:', { stripe })
    this.setState({ stripe })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku(
              sort: { fields: [price] }
            ) {
              edges {
                node {
                  id
                  currency
                  price
                  image
                  attributes {
                    name
                  }
                  product {
                    id
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <div className="block lg:flex flex-row lg:-mx-2">
            {skus.edges.map(({ node: sku }) => (
              <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </div>
        )}
      />
    )
  }
}

export default Sku