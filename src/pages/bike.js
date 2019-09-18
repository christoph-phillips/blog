import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const RunPage = (props) => {
  const data = props.data.mainPage.edges[0].node.childMarkdownRemark.frontmatter
  const imageProps = data.image.childImageSharp.fixed
  return (<Layout path={props.path}>
    <SEO title="Run Blog" />
  </Layout>
)}

export default RunPage

export const query = graphql`
  query {
    allBlogPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
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
                  fixed(width: 1000, height: 800) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
          }
        }
      }
    }
  }
}`
