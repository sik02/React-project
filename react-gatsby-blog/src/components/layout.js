/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
