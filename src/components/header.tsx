import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { NavButton, NavBar, NavLogo, FlexContainer } from "./building-blocks"
import Img, { FixedObject } from "gatsby-image"
import styled from "styled-components"

interface IHeaderQuery {
  site: {
    siteMetadata: {
      menuLinks: Array<{ link: string; name: string }>
    }
  }
  radileafLogo: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const Menu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  @media (min-width: 500px) {
    display: flex;
  }
`

const OpenMenuButton = styled.button`
  align-self: flex-end;
  padding: 5px 10px;
  border: none;
  font-size: 1.2rem;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  /* flex-grow: 2; */
  @media (min-width: 500px) {
    display: none;
  }
`

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle = "" }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const data = useStaticQuery<IHeaderQuery>(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
      radileafLogo: file(relativePath: { eq: "Logo-1.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <NavBar>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Img
            fixed={data.radileafLogo.childImageSharp.fixed}
            // style={{ marginBottom: "-5px" }}
          />
          <NavLogo to="/">{siteTitle}</NavLogo>
        </div>
        <OpenMenuButton onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? "Stäng" : "Öppna"}
        </OpenMenuButton>
      </div>
      <Menu open={openMenu}>
        <FlexContainer>
          {data.site.siteMetadata.menuLinks.map(link => (
            <NavButton to={link.link} key={link.link}>
              {link.name}
            </NavButton>
          ))}
        </FlexContainer>
      </Menu>
    </NavBar>
  )
}

export default Header
