import { useStaticQuery, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import styled from 'styled-components'

const IdentityContainer = styled.div`

`

const IdentityTitle = styled.h2``
const IdentityIntro = styled.h4``
const IdentityImage = styled(Img)``

const Identity = ({ profileimage, intro, identity, images }) => {
  console.log({ profileimage, intro, identity, images })
  return null
  return (<IdentityContainer>
  	<IdentityTitle>{identity}</IdentityTitle>
  	<Img
		fixed={profileimage.childImageSharp.fixed}
		objectFit="cover"
		objectPosition="50% 50%"
	/>
  	<IdentityIntro>{intro}</IdentityIntro>
	{ images.map(image => <IdentityImage
		fixed={image.childImageSharp.fixed}
		objectFit="cover"
		objectPosition="50% 50%"
	/>)}
  </IdentityContainer>
)
}

export default Identity

