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
    {
  main: allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "home"}}) {
    edges {
      node {
        childMarkdownRemark {
          id
          fields {
            slug
          }
          frontmatter {
			identities {
				identity
              	intro
              	images {
              		id
	               
              	}
            }
          }
        }
      }
    }
  }
}`