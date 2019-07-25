const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const programs = await graphql(`
  {
    allSanityProgram {
      nodes {
        id
        title
        subtitle
        slug {
          current
        }
        colorOne {
          hex
        }
        colorTwo {
          hex
        }
        heroImage {
          asset {
            url
          }
        }
        testimonials {
          quote
          member
          memberImage {
            asset {
              url
            }
          }
          location
        }
  
      }
    }
  }
  `)

  const template = path.resolve("src/templates/program.jsx")

  programs.data.allSanityProgram.nodes.forEach((node) => {
    createPage({
      path: `programs/${node.slug.current}`,
      component: template,
      context: {
        uid: node.id,
      },
    })
  })
}

