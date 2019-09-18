import React, { Fragment, useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"


const Portfolio = (props) => {
  console.log({ props })
  // const data = props.data.mainPage.edges[0].node.childMarkdownRemark.frontmatter
  // const imageProps = data.image.childImageSharp.fluid
  return (<Fragment>
    <SEO title="Portfolio" />
  </Fragment>
)}

export default Portfolio

export const query = graphql`
  query {
    allBlogPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/portfolio/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    mainPage: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
        }
      }
    }
  }
}`
