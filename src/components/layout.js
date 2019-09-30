/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from './footer'
import "./layout.css"

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

const Layout = ({ children, path }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} path={path} />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
