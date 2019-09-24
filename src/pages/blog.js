import React, { Fragment, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogItem, { Container } from "../components/blog-item"

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
    <Container>
      {blogData.map(item => <BlogItem { ...item } />)}
    </Container>
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
            created(formatString: "DD MMMM YYYY")
            image {
                id
                relativePath
                childImageSharp  {
                    fixed (width: 300, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
            intro
            main
          }
          excerpt
        }
      }
  }
}`
