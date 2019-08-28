/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./normalize.css"
import { Container } from "../building-blocks"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Raleway, sans-serif;
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.textColor};

  }
  h1{
    font-size: 2.5rem;
    font-family: 'Cormorant Garamond';
    font-weight: 400;
  }
`

const Main = styled.main`
  /* min-height: 100vh; */
`

const Layout: React.FC = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
