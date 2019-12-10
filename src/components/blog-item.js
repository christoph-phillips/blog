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
  max-width: 900px;
  margin-bottom: 50px;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 475px;
  }
`

const ImageContainer = styled.div`
  margin: 0px auto;
`
const ItemImage = styled(Img)`
  width: 300px;
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
const ItemType= styled(Link)`
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 12px;
  border: 2px solid #26798C;
  padding: 5px;
  text-decoration: none;
  color: #26798C;
`

const ItemSubtitle = styled.p`
  max-width: 600px;
`
const Inline = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
`

const BlogItem = ({ image, title, intro, slug, created, type }) => {
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
      <Inline>
        <ItemDate>{moment(new Date(created)).format("DD-MM-YYYY")}&nbsp;&nbsp; </ItemDate>
        <ItemType to={`/blog/${type}`}>{`${type}`}</ItemType>
      </Inline>
      <ItemSubtitle>{intro}</ItemSubtitle>
      
    </ItemInfo>
  </ItemContainer>
)
}

export default BlogItem
