import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import showdown from 'showdown'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

import githubLogo from "../images/github.png"
import { theme } from "../components/theme"

const Title = styled.h1``
const Subtitle = styled.h3`
  text-align: center;
`
const Content = styled.div`
`

const Section = styled.section`
  background: ${theme.background};
  width: 100%;
  padding: 40px;
  margin: 100px 0;
`

const GithubLink = styled.img`
`
const converter = new showdown.Converter()
export default ({ data }) => {
  const { title, created, image, description, features, link, github, intro } = data.post.frontmatter
  return (
      <Layout>
        <SEO title={title} />
        <Jumbotron 
          title={title}
          intro={intro}
          image={image}
          cta={{
            text: 'View',
            link: link
          }}
        />
        { /* github && <ExternalLink href={github} target={'_blank'}>
         <GithubLink
            src={githubLogo}
          />
        </ExternalLink> */ }
        <Content dangerouslySetInnerHTML={{__html: converter.makeHtml(description) }}/>
        <Section>
          <Subtitle>Features</Subtitle>
          <Content dangerouslySetInnerHTML={{__html: converter.makeHtml(features) }}/>
        </Section> 
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
                fluid(quality: 100) {
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
    }
  }
 `