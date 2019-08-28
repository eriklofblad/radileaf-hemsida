import React from "react"
import TopLayout from "./src/components/Layouts/TopLayout"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
