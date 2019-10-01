import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioItem, { Container } from "../components/portfolio-item"

const formatData = (data) => {
  return data.map(post => {
    return {
      ...post.node.frontmatter,
      slug: post.node.fields.slug
    }
  })
}
const extractFeatured = data => {
  return {
    featured: data.filter(item => item.featured),
    notFeatured: data.filter(item => !item.featured)
  }
}

const Portfolio = (props) => {
  const portfolioData = formatData(props.data.portfolio.edges)
  const { featured, notFeatured } = extractFeatured(portfolioData)
  console.log({ featured, notFeatured })
  return (<Layout>
    <SEO title="Portfolio" />
    <Container outline>
      {featured.map(item => <PortfolioItem { ...item } />)}
    </Container>
    <Container>
      {notFeatured.map(item => <PortfolioItem { ...item } />)}
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
            featured
          }
          excerpt
        }
      }
  }
}`

