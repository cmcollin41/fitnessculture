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
          title
          products {
            handle
            shopifyId
            productType
          }
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

    node.products.forEach((p) => {
      let decodedId = atob(p.shopifyId)
      // gid://shopify/Product/4174887977030
      let strippedId = decodedId.match(/([0-9]\w+)/g).join('')
  
      createPage({
        path: `${node.title.toLowerCase()}/${p.productType.toLowerCase()}/${p.handle}`,
        component: path.resolve(`src/templates/${p.productType}.jsx`),
        context: {
          shopifyId: p.shopifyId,
          strippedId: strippedId
        },
      })

    })
  })



  const webpageGraphQl = await graphql(`
    {
      allSanityWebpage {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)


  const webpage = path.resolve("src/templates/webpage.jsx")

  webpageGraphQl.data.allSanityWebpage.edges.forEach(({node}) => {
    createPage({
      path: `webpage/${node.slug.current}`,
      component: webpage,
      context: {
        id: node.id
      },
    })


  })


  // const shopifyGraphQL = await graphql(`
  //   {
  //     allShopifyProduct {
  //       edges {
  //         node {
  //           handle
  //           shopifyId
  //           tags
  //         }
  //       }
  //     }
  //   }
  // `)

  // const product = path.resolve("src/templates/product.jsx")
  // const ebook = path.resolve("src/templates/ebook.jsx")

  // shopifyGraphQL.data.allShopifyProduct.edges.forEach(({node}) => {
  //   let decodedId = atob(node.shopifyId)
  //   // gid://shopify/Product/4174887977030
  //   let strippedId = decodedId.match(/([0-9]\w+)/g).join('')

  //   if (node.tags.includes("ebooks")){
  //     createPage({
  //       path: `ebooks/${node.handle}`,
  //       component: ebook,
  //       context: {
  //         shopifyId: node.shopifyId,
  //         strippedId: strippedId
  //       },
  //     })
  //   } else {
  //     createPage({
  //       path: `products/${node.handle}`,
  //       component: product,
  //       context: {
  //         shopifyId: node.shopifyId,
  //         strippedId: strippedId
  //       },
  //     })
  //   }
  // })

}

