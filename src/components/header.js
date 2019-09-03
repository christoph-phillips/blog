import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
  background: black;
  margin-bottom: 1.45rem;
  width: 100%;
  height: 100%;
`

const links = [ 'run', 'bike', 'code' ]

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HomeLink to="/">{siteTitle}</HomeLink>
    {
      links.map(link => <NavLink to={`/${link}`}>{link}</NavLink>)
    }
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
