import { useStaticQuery, Link } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React, { useRef, useState, useEffect, Fragment } from "react"

import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  vertical-align: center;
  justify-content: center;
`

const ItemContainer = styled(Link)`
  width: 250px;
  height: 150px;
  margin: 10px;
  cursor: pointer;
`

const ItemBackground = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: white;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.8;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  border-radius: 2px;
`

const ItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  text-align: center;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.5s ease;
  ${props => props.hovered && css`
    opacity: 1;
  `}
`

const ItemTitle = styled.h2`
  width: 100%;
  font-size: 25px;
  margin: 0px 0px 10px 0px;
`

const ItemSubtitle = styled.h4`
  font-size: 15px;
`

const PortfolioItem = ({ image, title, intro, slug }) => {
  const [ ref, hovered ] = useHover()
  return (
  <ItemContainer to={slug} ref={ref}>
    <ItemBackground
      Tag="div"
      fluid={image && image.childImageSharp.fluid}
      style={{ height: '100%', width: '100%'}}
    >
    <ItemInfo hovered={hovered}>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{intro}</ItemSubtitle>
      <Overlay />
    </ItemInfo>
  </ItemBackground>
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
