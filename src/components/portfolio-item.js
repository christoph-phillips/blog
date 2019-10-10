import { Link } from "gatsby"
import Img from 'gatsby-image'
import React, { useRef, useState, useEffect } from "react"

import styled, { css } from 'styled-components'

import { theme } from './theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  ${props => props.outline && css`
    background: ${theme.background};
    margin-bottom: 50px;
    padding: 50px 0px;
  `}
`

const ItemContainer = styled(Link)`
  width: 300px;
  height: 400px;
  cursor: pointer;
  text-decoration: none;
  margin: 5px;
  padding: 10px 5px;
  transition: all 0.2s ease;
  ${props => props.hovered && css`
    background: ${props.featured ? 'white' : theme.background};
    border-radius: 2px;
  `}

`

const Image = styled.div`
  width: 300px;
  height: 175px;
`
const ItemBackground = styled(Img)`
`

const ItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  color: white;
  
`

const ItemTitle = styled.h4`
  width: 100%;
  font-size: 25px;
  margin: 0px 0px 10px 0px;
  color: #171717;
  font-size: 1.25rem;
  font-family: Montserrat;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.5s ease;
  ${props => props.hovered && css`
    color: ${theme.primaryColor};
  `}
`

const ItemSubtitle = styled.p`
  font-size: 15px;
  text-decoration: none;
  transition: all 0.5s ease;
  ${props => props.hovered && css`
  color: ${theme.primaryColor};
  `}
`

const PortfolioItem = ({ image, title, intro, slug, featured }) => {
  const [ ref, hovered ] = useHover()
  return (
  <ItemContainer to={slug} ref={ref} hovered={hovered} featured={featured}>
    <Image hovered={hovered}>
      <ItemBackground
        Tag="div"
        fixed={image && image.childImageSharp.fixed}
        style={{ height: '100%', width: '100%'}}
      />
    </Image>
    <ItemInfo>
      <ItemTitle hovered={hovered}>{title}</ItemTitle>
      <ItemSubtitle hovered={hovered}>{intro}</ItemSubtitle>
    </ItemInfo>
  </ItemContainer>
)
}

function useHover() {
  const ref = useRef()
  const [ hovered, setHovered ] = useState(false)
  const enter = () => setHovered(true)
  const exit = () => setHovered(false)
  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', exit)
    return () => {
      ref.current.removeEventListener('mouseenter', enter)
      ref.current.removeEventListener('mouseleave', exit)
    }
  }, [ref])
  return [ ref, hovered ]
}

export default PortfolioItem
