import React, { Fragment, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const formatBlogData = (data) => {
  return data.map(post => {
    return {
      ...post.node.frontmatter,
      slug: post.node.fields.slug
    }
  })
}

const Blog = (props) => {
  const blogData = formatBlogData(props.data.posts.edges)
  console.log({ blogData })
  return (<Layout>
    <SEO title="Blog" />
  </Layout>
)}

export default Blog

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___created]}, filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            type
            date(formatString: "DD MMMM YYYY")
            thumbnail {
                id
                relativePath
                childImageSharp  {
                    fluid (maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
          }
          excerpt
        }
      }
  }
}`
