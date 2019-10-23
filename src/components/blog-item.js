import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from 'styled-components'
import moment from 'moment'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemContainer = styled(Link)`
  height: 250px;
  min-height: 180px;
  margin-bottom: 50px;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 300px;
  }
`

const ImageContainer = styled.div`
  margin: 0px auto;
`
const ItemImage = styled(Img)`
  width: 250px;
  height: 250px;
`

const ItemInfo = styled.div`
  width: calc(100% - 400px);
  @media (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const ItemTitle = styled.h2`
  margin: 10px 0px;
`
const ItemDate= styled.h5`
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 12px;
`

const ItemSubtitle = styled.p`
  max-width: 600px;
`


const BlogItem = ({ image, title, intro, slug, created }) => {
  return (
  <ItemContainer to={slug}>
    <ImageContainer>
    <ItemImage 
      fluid={image.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
    />
    </ImageContainer>
    <ItemInfo>
      <ItemTitle>{title}</ItemTitle>
      <ItemDate>{moment(created).format("DD-MM-YYYY")}</ItemDate>
      <ItemSubtitle>{intro}</ItemSubtitle>
    </ItemInfo>
  </ItemContainer>
)
}

export default BlogItem
