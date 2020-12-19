/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import NavBar from "./navbar"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid-container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="mobile-navbar">item-1.5</div>
        <div className="hero">item-2</div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
