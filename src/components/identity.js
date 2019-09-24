import { useStaticQuery, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'

const IdentityContainer = styled.div`

`
const ProfileImage = styled(Img)`
	width: 200px;
	height: 200px;
	border-radius: 100%;
`

const IdentityTitle = styled.h2``
const IdentityIntro = styled.h4``

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const IdentityImage = styled(Img)`
`

const Identity = ({ profileimage, intro, identity, images }) => {
  console.log({ profileimage, intro, identity, images })
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

