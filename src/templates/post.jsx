import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import BlockContent, { defaultSerializers } from '@sanity/block-content-to-react'

const Post = ({data}) => {
  const post = data.sanityPost

  return (
    <Layout>
      <div className="container mx-auto px-5">
        <div className="flex flex-row justify-center items-center py-10">
          <Img fluid={post.mainImage.asset.fluid} className="h-auto w-full md:w-2/3 order-1 md:order-0 flex-none bg-cover"/>
        </div>
        <div style={{maxWidth: "720px", margin: "0 auto"}}>
            <h1 className="text-xl uppercase mt-10 mb-2" style={{fontWeight: "900"}}>{post.title}</h1>
            <div className="flex flex-row items-center mb-6">
              <Img fixed={post.author.image.asset.fixed} className="w-20 h-20 rounded-full"/>
              <h6 className="uppercase text-xs ml-4" style={{fontWeight: "900"}}>{post.author.name}</h6>
            </div>
          <BlockContent blocks={post._rawBody} serializers={defaultSerializers} projectId="forwg78b" dataset="production"/>
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($uid: String!) {
    sanityPost(id: { eq: $uid }) {
      id
      title
      _rawBody
      mainImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      author {
        name
        image {
          asset {
            fixed(width: 50) {
              ...GatsbySanityImageFixed_withWebp
            }
          }
        }
      }
    }
  }
`
