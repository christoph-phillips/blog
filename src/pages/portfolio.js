import React, { Fragment, useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import PortfolioItem, { Container } from "../components/portfolioItem"

console.log({ PortfolioItem, Container })
const formatData = (data) => {
  return data.map(post => {
    return {
      ...post.node.frontmatter
    }
  })
}

const Portfolio = (props) => {
  const portfolioData = formatData(props.data.portfolio.edges)
  console.log({ portfolioData })
  return (<Fragment>
    <SEO title="Portfolio" />
    <Container>
      {portfolioData.map(item => <PortfolioItem image={item.image} />)}
    </Container>
  </Fragment>
)}

export default Portfolio

export const query = graphql`
  query {
    portfolio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "portfolio/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            created(formatString: "DD MMMM YYYY")
            image {
                id
                childImageSharp {
                  fluid {
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
