import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Header = styled.header`
  background: darkblue;
  margin-bottom: 1.45rem;
`

const NavBar: React.FC = ({ children }) => {
  return (
    <Header>
      <Nav>{children}</Nav>
    </Header>
  )
}

export default NavBar
