const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const programs = await graphql(`
  {
    allSanityProgram(filter: {active: {eq: true}}) {
      nodes {
        id
        title
        subtitle
        gender
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
      path: `programs/${node.gender}/${node.slug.current}`,
      component: template,
      context: {
        uid: node.id,
      },
    })
  })
}

