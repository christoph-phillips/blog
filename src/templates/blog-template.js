import React from "react"
import { graphql } from "gatsby"

import showdown from 'showdown'


import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import { Newsletter } from "../components/form"
import IntroBox from "../components/intro-box"
import BlogItem from "../components/blog-item"
import PostFooter from "../components/post-footer"

import { extension } from '../extensions/showdown-figure'
import { findNextPosts } from "../utils"

require('showdown-youtube');

const Content = styled.div`
  margin-top: -50px;
`
const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-evenly;
  @media (max-width: 420px) {
    flex-direction: column;
    height: 475px;
    margin-top: 100px;
  }
`


const converter = new showdown.Converter({tables: true, emoji: true, extensions: [extension, 'youtube']})
export default (props) => {
  const meta = props.pageContext.meta
  const { prevPost, nextPost } = findNextPosts(props.data.posts.edges, props.data.post.id)
  const { title, image, intro, main, created, type } = props.data.post.frontmatter
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
        <Content className="post" dangerouslySetInnerHTML={{__html: converter.makeHtml(main) }} />
        { /* <PostFooter /> */ }
        <PostsContainer>  
          <BlogItem {...nextPost} small right />
          <BlogItem {...prevPost} small left />
        </PostsContainer>
        <Newsletter />
      </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
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
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___created]}, filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            type
            created(formatString: "DD MMMM YYYY")
            image {
                id
                relativePath
                childImageSharp  {
                    fluid (quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
            intro
            main
          }
          excerpt
        }
      }
  }
  }
 `