import React from "react"
import styled from "styled-components"
import { Container, FlexContainer } from "."

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Header = styled.header`
  background: ${({ theme }) => theme.palette.main};
  border-bottom: 1px solid lightgray;
  color: ${({ theme }) => theme.palette.textColor};
  /* margin-bottom: 1.45rem; */
`

const NavBar: React.FC = ({ children }) => {
  return (
    <Header>
      <Container>
        <FlexContainer justifyContent="space-between">{children}</FlexContainer>
      </Container>
    </Header>
  )
}

export default NavBar
