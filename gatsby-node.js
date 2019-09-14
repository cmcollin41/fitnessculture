const path = require("path")

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
}

