import styled from "styled-components"
import { Link } from "gatsby"

export const NavButton = styled(Link)`
  text-decoration: none;
  color: ${({ color = "black" }) => color};
  font-family: "Raleway", sans-serif;
  font-size: 1.3rem;
  margin: 0px 10px;
  font-weight: 300;
`
export const NavLogo = styled(Link)`
  font-size: 2rem;
  font-family: "Raleway", sans-serif;
  color: ${({ color = "black" }) => color};
  text-decoration: none;
  margin: 0px 10px;
  font-weight: 600;
`
