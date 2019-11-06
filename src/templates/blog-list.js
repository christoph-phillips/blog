import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogItem, { Container } from "../components/blog-item"
import IntroBox from "../components/intro-box"
console.log({ IntroBox })
const formatBlogData = (data) => {
  return data.map(post => {
    return {
      ...post.node.frontmatter,
      slug: post.node.fields.slug
    }
  })
}

const Blog = (props) => {
  console.log({ props })
  const type = props.pathContext.type
  const meta = props.pathContext.meta
  let blogData = formatBlogData(props.data.posts.edges)
  if (type) {
    blogData = blogData.filter(item => item.type.includes(type))
  }
  const Box = meta && meta.intro && <IntroBox content={meta.intro} />
  return (<Layout
      title={meta.title}
      subtitle={meta.subtitle}
    >
    <SEO title={meta.title} />
    <Container>
      { Box }
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
                    fluid (quality: 100) {
                      ...GatsbyImageSharpFluid
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
