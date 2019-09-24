// import React, { useEffect } from "react"
// import { Link, graphql, navigate } from "gatsby"
// import Img from "gatsby-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Portfolio from "../components/portfolio"

// const RunPage = (props) => {
//   const data = props.data.mainPage.edges[0].node.childMarkdownRemark.frontmatter
//   const imageProps = data.image.childImageSharp.fluid
//   return (<Layout path={props.path}>
//     <SEO title="Coding Blog" />
//     <Portfolio image={imageProps}/>
//   </Layout>
// )}

// export default RunPage

// export const query = graphql`
//   query {
//     allBlogPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//     mainPage: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               title
//               intro
//               image {
//                 id
//                 childImageSharp {
//                   fluid {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//           }
//         }
//       }
//     }
//   }
// }`
