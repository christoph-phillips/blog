import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioItem, { Container } from "../components/portfolio-item"
import { theme } from "../components/theme"

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

const Subtitle = styled.h2`
  text-align: center;
`

const Section = styled.section`
  width: 100%;
  padding: 40px;
  margin: 100px 0;
  margin-top: -50px;
  background: ${theme.background};
`

const Portfolio = (props) => {
  const portfolioData = formatData(props.data.portfolio.edges)
  const { featured, notFeatured } = extractFeatured(portfolioData)
  console.log({ featured, notFeatured })
  return (<Layout
      title="Portfolio"
      subtitle="Challenges, accomplisments, fun, creativity"
    >
    <SEO title="Portfolio" />
    <Section>
      <Subtitle>Featured</Subtitle>
      <Container>
        {featured.map(item => <PortfolioItem { ...item } featured />)}
      </Container>
    </Section>
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
                    fixed (quality: 100) {
                      ...GatsbyImageSharpFixed
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

