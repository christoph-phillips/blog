import { useStaticQuery, Link } from "gatsby"
import React from "react"

import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 75px;
  border-top: 1px solid gray;
`

const Footer = () => (
  <FooterContainer>
     © {new Date().getFullYear()}, Chris Phillips
  </FooterContainer>
)

export default Footer

