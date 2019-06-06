import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import '../css/global.css'

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <React.Fragment>
      <Layout>
        <div className="container">
          <h1>{data.title.text}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: prismicPost.data.content.html }}
          />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`