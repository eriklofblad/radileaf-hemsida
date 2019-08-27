import styled from "styled-components"
import { Link } from "gatsby"

const NavButton = styled(Link)`
  text-decoration: none;
  color: ${({ color = "white" }) => color};
  font-size: 1.3rem;
  font-family: sans-serif;
  margin: 0px 10px;
`

export default NavButton
