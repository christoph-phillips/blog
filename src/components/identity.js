
import React from "react"
import Img from "gatsby-image"

import styled, { css } from 'styled-components'
import { theme }  from './theme'

const IdentityContainer = styled.div`
	margin-bottom: 50px;
	background: ${theme.background};
	padding: 50px;
	${props => props.top && css`
		margin-top: -50px;
	`}
`
const ProfileImage = styled(Img)`
	width: 300px;
	height: 300px;
	border-radius: 100%;
	margin: 20px 40px;
	@media (max-width: 768px) {
		margin: 20px auto;
		width: 200px!important;
		height: 200px!important;
	}
`

const IdentityTitle = styled.h1``
const IdentityIntro = styled.p``

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	vertical-align: center;
	justify-content: center;
`
const About = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`
const Details = styled.div`
	width: calc(100% - 300px);
	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`
const IdentityImage = styled(Img)`
	margin: 15px;
	zoom: 0.6;
`

const Identity = ({ profileimage, intro, identity, images, i }) => {
  return (<IdentityContainer top={i === 0 }>
  	<About>
		<ProfileImage
			fixed={profileimage.childImageSharp.fixed}
			objectFit="cover"
			objectPosition="50% 50%"
		/>
		<Details>
			<IdentityTitle>{identity}</IdentityTitle>
			<IdentityIntro>{intro}</IdentityIntro>
		</Details>
  	</About>
	  <ImageContainer>
	{ images && images.map(image => image && (<IdentityImage
		fixed={image.childImageSharp.fixed}
	/>))}
	</ImageContainer>
  </IdentityContainer>
)
}

export default Identity

