import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { useRef, useState, useEffect, Fragment } from "react"

import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ItemContainer = styled(Link)`
  width: 300px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
`

const ItemImage = styled(Img)`

`

const ItemInfo = styled.div`
`

const ItemTitle = styled.h2`
  width: 100%;
`

const ItemSubtitle = styled.h4``

const PortfolioItem = ({ image, title, intro, slug }) => {
  console.log({ image, title, intro, slug })
  return (
  <ItemContainer to={slug}>
      <Img
        fixed={image.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
      />
    <ItemInfo>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{intro}</ItemSubtitle>
    </ItemInfo>
  </ItemContainer>
)
}

export default PortfolioItem
