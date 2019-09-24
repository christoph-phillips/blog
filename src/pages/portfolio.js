import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioItem, { Container } from "../components/portfolioItem"

const formatData = (data) => {
  return data.map(post => {
    return {
      ...post.node.frontmatter,
      slug: post.node.fields.slug
    }
  })
}

const Portfolio = (props) => {
  const portfolioData = formatData(props.data.portfolio.edges)
  return (<Layout>
    <SEO title="Portfolio" />
    <Container>
      {portfolioData.map(item => <PortfolioItem { ...item } />)}
    </Container>
  </Layout>
)}

export default Portfolio

export const query = graphql`
  query {
    portfolio: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___created]}, filter: {fileAbsolutePath: {regex: "/content/portfolio/"}}) {
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
                    fluid (maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
            intro
            description
            features
            link
            github
          }
          excerpt
        }
      }
  }
}`

