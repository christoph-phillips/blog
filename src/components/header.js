import { useStaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React from "react"

import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid gray;
  display: flex;
  background: white;
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
  color: gray;
`
const HomeLink = styled(Link)`
  font-weight: bolder;
  text-transform: uppercase;
  font-family: Montserrat;
  width: 20%;
`

const SocialLinks = styled.div`
  width: 20%;
`

const Header = ({ path }) => {
  const { header, title } = useHeaderData()
  const links = [ 'home', 'blog', 'portfolio' ]
  return (
  <HeaderContainer>
    <HomeLink to="/">C Phillips</HomeLink>
    <LinksContainer>
      <NavLinks>
        {
          links.map(link => <NavLink 
            key={link} 
            to={`/${link === 'home' ? '' : link}`}
            activeStyle={{ color: 'black' }}
          >
            {link}
          </NavLink>)
        }
      </NavLinks>
    </LinksContainer>
    <SocialLinks>
    </SocialLinks>
  </HeaderContainer>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const useHeaderData = () => {
  const data = useStaticQuery(graphql`

    query {
      site {
        siteMetadata {
          title
        }
      }
      header: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "header"}}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                link1
                link2
                link3
                image1 {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                image2 {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                image3 {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
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
    title: data.site.siteMetadata.title,
    header: data.header.edges[0].node.childMarkdownRemark.frontmatter
  }
}
