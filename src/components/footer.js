// import { useStaticQuery, Link } from "gatsby"
import React from "react"

import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 0px;
  border-top: 0;
`

const Footer = () => (
  <FooterContainer>
     {/*© {new Date().getFullYear()}, Chris Phillips*/}
  </FooterContainer>
)

export default Footer

