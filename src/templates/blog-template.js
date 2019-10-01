import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import showdown from 'showdown'

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Newsletter } from "../components/form"

import { extension } from '../extensions/showdown-figure'

const Head = styled.div`
  text-align: center;
`
const Title = styled.h1``
const Content = styled.div``

const converter = new showdown.Converter({tables: true, emoji: true, extensions: [extension]})
export default ({ data }) => {

  const { title, image, intro, main } = data.post.frontmatter
  return (
      <Layout>
        <SEO title={title} description={intro} image={image} />
        <Head>
          <Img
            fixed={image.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <Title>{title}</Title>
        </Head>
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