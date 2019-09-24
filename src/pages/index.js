import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = (props) => {
  return (<Layout path={props.path}>
    <SEO title="Home" />
  </Layout>
)}

export default HomePage

export const query = graphql`
     query {
      main: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "header"}}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                link1
                link2
                link3
                image1 {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                image2 {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                image3 {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
            }
          }
        }
      }
    }
  }
}`