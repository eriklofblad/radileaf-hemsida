import React from "react"
import TopLayout from "./src/components/layouts/TopLayout"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
