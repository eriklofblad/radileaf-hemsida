import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavButton, NavBar, NavLogo } from "./building-blocks"
import Img, { FixedObject } from "gatsby-image"

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

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle = "" }) => {
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
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Img
          fixed={data.radileafLogo.childImageSharp.fixed}
          style={{ marginBottom: "-5px" }}
        />
        <NavLogo to="/">{siteTitle}</NavLogo>
      </div>

      <div style={{ display: "flex" }}>
        {data.site.siteMetadata.menuLinks.map(link => (
          <NavButton to={link.link} key={link.link}>
            {link.name}
          </NavButton>
        ))}
      </div>
    </NavBar>
  )
}

export default Header
