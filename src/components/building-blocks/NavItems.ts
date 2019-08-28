import styled from "styled-components"
import { Link } from "gatsby"

export const NavButton = styled(Link)`
  text-decoration: none;
  color: ${({ color = "white" }) => color};
  font-size: 1.3rem;
  font-family: sans-serif;
  margin: 0px 10px;
`
export const NavLogo = styled(Link)`
  font-size: 2rem;
  color: ${({ color = "white" }) => color};
  text-decoration: none;
  margin: 0px 10px;
`
