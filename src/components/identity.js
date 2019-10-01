
import React from "react"
import Img from "gatsby-image"

import styled from 'styled-components'

const IdentityContainer = styled.div`
	margin-bottom: 50px;
	text-align: center;

`
const ProfileImage = styled(Img)`
	width: 200px;
	height: 200px;
	border-radius: 100%;
`

const IdentityTitle = styled.h1`

`
const IdentityIntro = styled.h4``

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	vertical-align: center;
	justify-content: center;
`
const IdentityImage = styled(Img)`
	margin: 15px;
	zoom: 0.6;
`

const Identity = ({ profileimage, intro, identity, images }) => {
  return (<IdentityContainer>
  	<IdentityTitle>{identity}</IdentityTitle>
  	<ProfileImage
		fixed={profileimage.childImageSharp.fixed}
		objectFit="cover"
		objectPosition="50% 50%"
	/>
	
  	<IdentityIntro>{intro}</IdentityIntro>
  	<ImageContainer>
	{ images.map(image => image && (<IdentityImage
		fixed={image.childImageSharp.fixed}
	/>))}
	</ImageContainer>
  </IdentityContainer>
)
}

export default Identity

