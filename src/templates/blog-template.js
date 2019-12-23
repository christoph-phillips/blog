import React from "react"
import { graphql } from "gatsby"

import showdown from 'showdown'


import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import { Newsletter } from "../components/form"
import { theme } from '../components/theme'

import { extension } from '../extensions/showdown-figure'

require('showdown-youtube');

const Header = styled.div`
  position: absolute;
  top: 75px;
  display: flex;
  align-items: center;
  height: 400px;
  background: ${theme.background};
  vertical-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`
const Details = styled.div`
  width: 50%;
  margin-right: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Intro = styled.p`@media (max-width: 768px) {
  font-size: 15px;
}`
const Date = styled.h5`
  @media (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
@media (max-width: 768px) {
  font-size: 25px;
}`

const ImageContainer = styled.div`
  width: 400px;
  height: auto;
  margin: 0px;
  @media (max-width: 768px) {
    width: 300px;
    max-width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 350px) {
    width: 200px;
    max-width: 100%;
    margin-bottom: 20px;
  }
`

const Content = styled.div`
  margin-top: -50px;
`

const converter = new showdown.Converter({tables: true, emoji: true, extensions: [extension, 'youtube']})
export default ({ data }) => {

  const { title, image, intro, main, created } = data.post.frontmatter
  console.log({ image })
  return (
      <Layout>
        <SEO title={title} description={intro} image={image} />
        <Jumbotron 
          title={title}
          date={created}
          intro={intro}
          image={image}
        />
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