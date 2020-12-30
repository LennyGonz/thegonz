import React, { useState } from 'react';
import PropTypes from "prop-types"

import NavBar from "./navbar";
import MobileNav from "./mobile";
// import Hero from "./hero";
import './layout.css'
import '../styles/App.css'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div>
          <NavBar open={open} setOpen={setOpen} />
        </div>
        <div>
          <MobileNav open={open} setOpen={setOpen} />
        </div>
        <main className="children">
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
