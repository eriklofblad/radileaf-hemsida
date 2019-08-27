import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavButton from "./building-blocks/NavButton"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "Logo-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: `skyblue`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{ width: "50px", height: "50px" }}
          />
          <h1 style={{ margin: "0px 20px 0px 0px" }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>

        <div style={{ display: "flex" }}>
          {data.site.siteMetadata.menuLinks.map(link => (
            <NavButton to={link.link} key={link.link}>
              {link.name}
            </NavButton>
          ))}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
