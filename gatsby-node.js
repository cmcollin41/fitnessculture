const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/post.jsx")

  posts.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })


  const programs = await graphql(`
    {
      allPrismicProgram {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const program_template = path.resolve("src/templates/program.jsx")

  programs.data.allPrismicProgram.edges.forEach(edge => {
    createPage({
      path: `programs/${edge.node.uid}`,
      component: program_template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}

