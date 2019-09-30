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
  height: 250px;
  min-height: 180px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: black;
  margin: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 300px;
  }
`

const ItemImage = styled(Img)`
  width: 400px;
  height: auto;
  max-height: 200px;
  max-width: 100%;
  height: 100%;
  margin: 0px auto;
`

const ItemInfo = styled.div`
  width: calc(100% - 400px);
  @media (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
`

const ItemTitle = styled.h2`
  margin: 5px 5px;
`
const ItemDate= styled.h5`
  margin: 5px 5px;
  font-size: 12px;
`

const ItemSubtitle = styled.h5`
  margin: 10px 5px;
`

const BlogItem = ({ image, title, intro, slug, created }) => {
  return (
  <ItemContainer to={slug}>
    <ItemImage 
      fixed={image.childImageSharp.fixed}
      objectFit="cover"
      objectPosition="50% 50%"
    />
    <ItemInfo>
      <ItemDate>{created}</ItemDate>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{intro}</ItemSubtitle>
    </ItemInfo>
  </ItemContainer>
)
}

export default BlogItem
