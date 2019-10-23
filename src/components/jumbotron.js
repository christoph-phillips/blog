import React from 'react'
import moment from 'moment'
import Img from "gatsby-image"
import styled from 'styled-components'
import { theme } from '../components/theme'

const Header = styled.div`
  position: absolute;
  top: 75px;
  width: calc(100% - 200px);
  display: flex;
  align-items: center;
  height: 400px;
  background: ${theme.background};
  vertical-align: center;
  @media (max-width: 1024px) {
    width: calc(100% - 100px);
  }
  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    flex-direction: column-reverse;
    width: calc(100% - 60px);
  }
`
const Left = styled.div`
  width: 50%;
  margin-right: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Right = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Intro = styled.p`@media (max-width: 768px) {
  font-size: 15px;
}`
const Date = styled.h5`
  @media (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
@media (max-width: 768px) {
  font-size: 25px;
}`

const ImageContainer = styled.div`
  width: 400px;
  height: auto;
  max-width: 100%;
  margin: 0px auto;
  @media (max-width: 768px) {
    width: 300px;
    max-width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 350px) {
    width: 150px;
    max-width: 100%;
    margin-bottom: 20px;
  }
`
const CTA = styled.a`
    background-color: transparent;
    border: 0.125rem solid ${theme.primaryColor};
    color: ${theme.primaryColor};
    padding: 10px 20px;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
    width: 200px;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    display: block;
    text-align: center;
    margin-bottom: 20px;
    :hover {
        background-color: ${theme.primaryColor};
        color: white;
    }
    @media (max-width: 768px) {
        margin: -10px auto 10px auto;
    }
`

const Jumbotron = ({title, date, intro, image, cta }) => (<Header>
<Left>
  <Title>{title}</Title>
    { date && <Date>{moment(date).format("DD-MM-YYYY")}</Date> }
  <Intro>{intro}</Intro>
  {cta && <CTA target="_blank" href={cta.link}>{cta.text}</CTA>}
</Left>
<Right>
    <ImageContainer>
    <Img
        fluid={image.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        style={{
          maxHeight: '300px'
        }}
    />
    </ImageContainer>
    </Right>
    </Header>

)

export default Jumbotron