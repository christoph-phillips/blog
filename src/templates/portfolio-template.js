import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import showdown from 'showdown'
import styled, { css } from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import githubLogo from "../images/github.png"

const Title = styled.h1``
const Subtitle = styled.h3``
const Content = styled.div``
const ExternalLink = styled.a``
const GithubLink = styled.img`
`
const converter = new showdown.Converter()
export default ({ data }) => {
  console.log(data)
  const { title, type, image, intro, description, features, link, github } = data.post.frontmatter
  return (
      <Layout>
        <SEO title={title} />
        <ExternalLink href={link} target={'_blank'}>
          <Img
            fixed={image.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </ExternalLink>
        <Title>{title}</Title>
        { github && <ExternalLink href={github} target={'_blank'}>
         <GithubLink
            src={githubLogo}
          />
        </ExternalLink> }
        <Content dangerouslySetInnerHTML={{__html: converter.makeHtml(description) }}/>
        <Subtitle>Features</Subtitle>
        <Content dangerouslySetInnerHTML={{__html: converter.makeHtml(features) }}/>
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
        description
        features
        link
        github
      }
    }
  }
 `