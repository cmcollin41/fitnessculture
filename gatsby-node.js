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


  
  const landingPageGraphQl = await graphql(`
  {
    allSanityLandingPage(filter: {active: {eq: true}}) {
      nodes {
        id
        slug {
          current
        }
      }
    }
  }
  `)

  const landingPage = path.resolve("src/templates/landingPage.jsx")

  landingPageGraphQl.data.allSanityLandingPage.nodes.forEach((node) => {
    createPage({
      path: `downloads/${node.slug.current}`,
      component: landingPage,
      context: {
        id: node.id,
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
  

      // path: `${node.title.toLowerCase()}/${p.productType.toLowerCase()}/${p.handle}`,
      createPage({
        path: `collections/${node.handle}/products/${p.handle}`,
        component: path.resolve(`src/templates/${p.productType}.jsx`),
        context: {
          shopifyId: p.shopifyId,
          strippedId: strippedId
        },
      })

    })
  })


  const posts = await graphql(`
  {
    allSanityPost {
      nodes {
        id
        slug {
          current
        }
      }  
    }
  }
  `)

  const postTemplate = path.resolve("src/templates/post.jsx")

  posts.data.allSanityPost.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.slug.current}`,
      component: postTemplate,
      context: {
        uid: node.id,
      },
    })
  })

}

