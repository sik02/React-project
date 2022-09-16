import * as React from "react"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
