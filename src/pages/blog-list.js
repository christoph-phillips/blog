import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogItem, { Container } from "../components/blog-item"

import { theme } from '../components/theme'
const formatBlogData = (data) => {
  return data.map(post => {
    return {
      ...post.node.frontmatter,
      slug: post.node.fields.slug
    }
  })
}

const Introduction = styled.div`
  background: ${theme.background};
  padding: 50px 100px;
  margin-bottom: 30px;
  margin-top: -70px;
  text-align: center;
`

const Blog = (props) => {
  console.log(props)
  const type = props.pathContext.type
  const meta = props.pathContext.meta
  let blogData = formatBlogData(props.data.posts.edges)
  if (type) {
    blogData = blogData.filter(item => item.type.includes(type))
  }
  const QuoteBox = meta && meta.intro && <Introduction>{meta.intro}</Introduction>
  return (<Layout
      title={meta.title}
      subtitle={meta.subtitle}
    >
    <SEO title={meta.title} />
    <Container>
      { QuoteBox }
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
