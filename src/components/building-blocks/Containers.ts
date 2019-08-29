import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

interface IFlexContainerProps {
  alignItems?: "flex-start" | "flex-end" | "center" | "strech" | "baseline"
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
}

export const FlexContainer = styled.div<IFlexContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-end")};
  }
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
`
