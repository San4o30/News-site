import React from 'react'
import Toolbar from './Toolbar/Toolbar'
import './Layout.css'
import Footer from './Footer/Footer'
function Layout(props) {
  return (
      <>
        <Toolbar/>
        <main className="main-wrapper">
            {props.children}
        </main>
        <Footer/>
        </>
  )
}

export default Layout