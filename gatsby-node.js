const path = require("path")
const atob = require("atob")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const programs = await graphql(`
  {
    allSanityProgram(filter: {active: {eq: true}}) {
      nodes {
        id
        gender
        slug {
          current
        }  
      }
    }
  }
  `)

  const template = path.resolve("src/templates/program.jsx")

  programs.data.allSanityProgram.nodes.forEach((node) => {
    createPage({
      path: `programs/${node.gender}/${node.slug.current}`,
      component: template,
      context: {
        uid: node.id,
      },
    })
  })


  const basicGraphQl = await graphql(`
  {
    allSanityBasic(filter: {active: {eq: true}}) {
      nodes {
        id
        slug {
          current
        }
      }
    }
  }
  `)

  const basiclp = path.resolve("src/templates/lpages/basic.jsx")

  basicGraphQl.data.allSanityBasic.nodes.forEach((node) => {
    createPage({
      path: `downloads/${node.slug.current}`,
      component: basiclp,
      context: {
        uid: node.id,
      },
    })
  })


  const subscribeGraphQl = await graphql(`
  {
    allSanitySubscribe(filter: {active: {eq: true}}) {
      nodes {
        id
        slug {
          current
        }
      }
    }
  }
  `)

  const subscribelp = path.resolve("src/templates/lpages/subscribe.jsx")

  subscribeGraphQl.data.allSanitySubscribe.nodes.forEach((node) => {
    createPage({
      path: `downloads/${node.slug.current}`,
      component: subscribelp,
      context: {
        uid: node.id,
      },
    })
  })

  const h3pGraphQl = await graphql(`
  {
    allSanityH3P(filter: {active: {eq: true}}) {
      nodes {
        id
        slug {
          current
        }
      }
    }
  }
  `)

  const h3plp = path.resolve("src/templates/lpages/h3p.jsx")

  h3pGraphQl.data.allSanityH3P.nodes.forEach((node) => {
    createPage({
      path: `downloads/${node.slug.current}`,
      component: h3plp,
      context: {
        uid: node.id,
      },
    })
  })

  
  const collectionGraphQl = await graphql(`
  {
    allShopifyCollection {
      edges {
        node {
          shopifyId
          handle
        }
      }
    }
  }
  `)

  const collection = path.resolve("src/templates/collection.jsx")

  collectionGraphQl.data.allShopifyCollection.edges.forEach(({node}) => {
    createPage({
      path: `collections/${node.handle}`,
      component: collection,
      context: {
        shopifyId: node.shopifyId,
      },
    })
  })



  const shopifyGraphQL = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
    }
  `)

  const product = path.resolve("src/templates/product.jsx")

  shopifyGraphQL.data.allShopifyProduct.edges.forEach(({node}) => {
    let decodedId = atob(node.shopifyId)
    // gid://shopify/Product/4174887977030
    let strippedId = decodedId.match(/([0-9]\w+)/g).join('')
    createPage({
      path: `products/${node.handle}`,
      component: product,
      context: {
        shopifyId: node.shopifyId,
        strippedId: strippedId
      },
    })
  })

}

