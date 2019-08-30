import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  console.log({ data })
  const imageProps = data.image.childImageSharp.fixed
  console.log({ imageProps })
  return (<Layout>
    <SEO title="Home" />
    <h1>{ data.intro }</h1>
    <p>{ data.title }</p>
    <div style={{ width: '100%', marginBottom: `1.45rem` }}>
      <Img fixed={imageProps} /> 
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
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