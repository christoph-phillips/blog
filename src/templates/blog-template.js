import React from "react"
import { graphql } from "gatsby"
import showdown from 'showdown'

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import { Newsletter } from "../components/form"
import IntroBox from "../components/intro-box"

import { extension } from '../extensions/showdown-figure'

const Content = styled.div`
  margin-top: -50px;
`

const converter = new showdown.Converter({tables: true, emoji: true, extensions: [extension]})
export default (props) => {
  console.log({ props })
  const meta = props.pageContext.meta
  const { title, image, intro, main, created } = props.data.post.frontmatter
  const Box = meta && meta.intro && <IntroBox content={meta.intro} marginBottom={100} />
  return (
      <Layout>
        <SEO title={title} description={intro} image={image} />
        <Jumbotron 
          title={title}
          date={created}
          intro={intro}
          image={image}
        />
        {Box}
        <Content className="post" dangerouslySetInnerHTML={{__html: converter.makeHtml(main) }}/>
        <Newsletter />
      </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        created(formatString: "DD MMMM YYYY")
        image {
            id
            relativePath
            childImageSharp  {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
                fixed(quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
          }
        intro
        main
      }
    }
  }
 `