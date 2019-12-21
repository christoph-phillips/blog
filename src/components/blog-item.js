import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled, { css } from 'styled-components'
import moment from 'moment'
import { theme, animations } from './theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemContainer = styled(Link)`
  max-width: 900px;
  margin-bottom: 50px;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  ${props => props.small && css`
    zoom: 0.7;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  `}
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
  ${props => props.small && css`
    width: calc(100% - 400px);
    @media (max-width: 900px) {
      width: 100%;
    }
  `}
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const ItemTitle = styled.h2`
  margin: 10px 0px;
`
const ItemDate = styled.h5`
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

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  font-size: 100px;
  background: 0;
  position: absolute;
  color: ${theme.subtitle};
  ${props => props.left && css`
    left: -25px;
  `}
  ${props => props.right && css`
    right: -25px;
  `}
  top: 100px;
  animation: ${animations.float} 1s linear;
  animation-iteration-count: infinite; 
  font-weight: bolder;
`

const BlogItem = ({ image, title, intro, slug, created, type, small, right, left }) => {
  return (
  <ItemContainer to={slug} small={small}>
    <ImageContainer>
    <ItemImage 
      fluid={image.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
    />
    </ImageContainer>
    <ItemInfo small={small}>
      <ItemTitle>{title}</ItemTitle>
      <Inline>
        <ItemDate>{moment(new Date(created)).format("DD-MM-YYYY")}&nbsp;&nbsp; </ItemDate>
        <ItemType to={`/blog/${type}`}>{`${type}`}</ItemType>
      </Inline>
    { !small && <ItemSubtitle>{intro}</ItemSubtitle> }
    { /* small && <Arrow right={right} left={left}>{right ? '>' : '<'}</Arrow> */ }
    </ItemInfo>
  </ItemContainer>
)
}

export default BlogItem
