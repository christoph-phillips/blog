import { useStaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React from "react"

import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
`


const HeaderBackground = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  text-transform: uppercase;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: bolder;
`
const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 80px;
  color: white;
  margin-bottom: 60px;
  font-weight: bolder;
  text-transform: uppercase;
  font-family: Montserrat;
`

const Header = ({ path }) => {
  console.log('LOCATION', path)
  const { header, title } = useHeaderData()
  const links = [ header.link1, header.link2, header.link3 ]
  const images = [ header.image1, header.image2, header.image3 ]
  // const linkIndex = links.findIndex(link => path.includes(link))
  const currentImage = images[0]
  console.log(currentImage.childImageSharp.fluid)
  return (
  <HeaderContainer>
    <HeaderBackground
      Tag="div"
      className={'test'}
      fluid={currentImage.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{ height: '100%'}}
    >
    </HeaderBackground>
    <LinksContainer>
      <HomeLink to="/">{header.title}</HomeLink>
      <NavLinks>
        {
          links.map(link => <NavLink 
            key={link} 
            to={`/${link}`}
            activeStyle={{ color: 'red' }}
          >
            {link}
          </NavLink>)
        }
      </NavLinks>
    </LinksContainer>
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
