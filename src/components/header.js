import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { Fragment } from "react"

import styled from 'styled-components'

import { theme, animations } from './theme'

import strava from "../images/strava.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"


const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  display: flex;
  background: ${theme.background};
  z-index: 9999;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  text-align: center;
  width: 60%;
  @media (max-width: 540px) {
    width: 100%;
	}
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  
`
const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: Montserrat;
  margin: 25px 10px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.1rem;
  color: ${theme.primaryColor};
`
const HomeLink = styled(Link)`
  font-weight: bolder;
  text-transform: uppercase;
  font-family: Montserrat;
  width: 20%;
  @media (max-width: 540px) {
    display: none;
	}
`

const ProfileImage = styled(Img)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 12px 0px 12px 12px;
`

const SocialLinks = styled.div`
  width: 20%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  @media (max-width: 540px) {
    display: none;
	}
`
const ExternalLink = styled.a``
const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 21px 21px 0px 0px;
`
const Jumbotron = styled.div`
  width: 100%;
  margin-top: 75px;
  height: 400px;
  background: ${theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  text-align: center;
`
const Title = styled.h1`
  animation: ${animations.fadeIn} 0.5s linear;
`
const Subtitle = styled.h4`
  animation: ${animations.fadeIn} 1s linear;
`

const links = [ 'home', 'blog', 'portfolio' ]
const socialLinks = [
  {
    name: 'strava',
    icon: strava,
    link: 'https://www.strava.com/athletes/1267887'
  }, 
  {
    name: 'github',
    icon: github,
    link: 'https://github.com/christoph-phillips'
  },
  {
    name: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/chrisphillips86/'
  }
]

const Header = ({ path, title, subtitle }) => {
  const { identities } = useHeaderData()
  return (
  <Fragment>
    <HeaderContainer>
      <HomeLink to="/">
        <ProfileImage
          fixed={identities[0].profileimage.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </HomeLink>
      <LinksContainer>
        <NavLinks>
          {
            links.map(link => <NavLink 
              key={link} 
              to={`/${link === 'home' ? '' : link}`}
              activeStyle={{ borderBottom: `2px solid ${theme.primaryColor}` }}
              partiallyActive={link !== 'home'}
            >
              {link}
            </NavLink>)
          }
        </NavLinks>
      </LinksContainer>
      <SocialLinks>
        { socialLinks.map(data => (
            <ExternalLink key={data.link} href={data.link} target={'_blank'}>
            <SocialIcon
                src={data.icon}
              />
            </ExternalLink>
          ))}
      </SocialLinks>
    </HeaderContainer>
    <Jumbotron>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Jumbotron>
  </Fragment>
)
}

export default Header

const useHeaderData = () => {
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
                      fixed(width: 50, height: 50) {
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
