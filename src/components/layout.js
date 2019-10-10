
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from './footer'
import "./layout.css"
import { GlobalStyle } from './theme'


const Content = styled.div`
  margin: 100px 100px;
  min-height: 100%;
  @media (max-width: 1024px) {
    margin: 100px 50px;
  }
  @media (max-width: 768px) {
    margin: 100px 30px;
  }
`

const Layout = ({ children, path, subtitle, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header 
        path={path} 
        subtitle={subtitle}
        title={title}
      />
      <Content>
        <GlobalStyle />
        <main>{children}</main>
      </Content>
      <Footer />
    </>
  )
}

export default Layout
