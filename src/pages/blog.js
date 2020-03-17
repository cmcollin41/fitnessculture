import React from "react"
import {Link, graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from '../components/seo'

const Blog = ({ data }) => {
  const blogs = data.posts
  return (
    <Layout>
      <SEO title="Blog" description="Learn the latest in fitness and nutrition from experts like Steve Cook."  />

      <div className="container mx-auto py-20 px-5">
        <h1 className="statement mb-10 text-3xl text-center">Blog</h1>
        <div className="flex flex-row justify-center">
          {blogs.nodes.map((blog,i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded-sm bg-gray-900 mt-10 flex flex-col items-stretch">
              <Img
                  alt={blog.title}
                  className="block h-64 w-full bg-cover bg-center rounded-t-sm text-center overflow-hidden"
                  fluid={blog.mainImage.asset.fluid}
              />
              <div className="flex flex-col justify-between flex-grow">
                <div className="p-5">
                  <h4 className="statement text-2xl text-white">{blog.title}</h4>
                </div>
                <div className="p-5">
                  <Link to={"/blog/" + blog.slug.current} className="uppercase font-bold text-xs text-white border border-white rounded-sm py-2 px-4">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
)}

export default Blog

export const blogQuery = graphql`
  query postsQuery {
    posts: allSanityPost {
      nodes {
        title
        id
        slug {
          current
        }
        mainImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
      }
    }
  }
`