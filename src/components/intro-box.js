import React from 'react'
import { useStaticQuery, Link } from "gatsby"
import styled, { css } from 'styled-components'
import { theme } from './theme'
import Img from "gatsby-image"

const Box = styled.div`
  background: ${theme.background};
  padding: 40px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom + 'px' : '70px'};
  margin-top: -50px;
  display: flex;
  vertical-align: center;
  align-items: center;
`
const Content = styled.div`
`
const ImageContainer = styled.div`
    width: 150px;
    height: 100%;
    margin-right: 40px;
`
const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`

const IntroBox = ({ content, marginBottom }) => {
    const { identities } = getProfileImage()
    console.log({ identities })
    return (<Box marginBottom={marginBottom} >
                <ImageContainer>
                    <Image
                        fixed={identities[0].profileimage.childImageSharp.fixed}
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
                </ImageContainer>
                <Content>{content}</Content>
            </Box>)
}
    
export default IntroBox


const getProfileImage = () => {
    const data = useStaticQuery(graphql`
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
                  identity
                  profileimage {
                    childImageSharp {
                        fixed(width: 100, height: 100) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                  }
              }
            }
          }
        }
      }
    }
  }
  `)
    return {
      identities: data.main.edges[0].node.childMarkdownRemark.frontmatter.identities,
    }
  }
  