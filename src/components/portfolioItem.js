import { useStaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React from "react"

import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

const ItemContainer = styled.div`
  width: 300px;
  height: 200px;
`

const ItemBackground = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const PortfolioItem = ({ image }) => {
  console.log({image})
  return (
  <ItemContainer>
    <ItemBackground
    className="test"
      Tag="div"
      fluid={image && image.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{ height: '100%', width: '100%'}}
    >
    </ItemBackground>

  </ItemContainer>
)
}

// PortfolioItem.propTypes = {
//   siteTitle: PropTypes.string,
// }

// PortfolioItem.defaultProps = {
//   siteTitle: ``,
// }

export default PortfolioItem
