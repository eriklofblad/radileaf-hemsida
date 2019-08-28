import React from "react"
import { ThemeProvider, DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  palette: {
    background: "white",
    main: "lightgrey",
    textColor: "black",
  },
}

const TopLayout: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TopLayout
