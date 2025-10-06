import React from 'react'
import Header from './Header'
import Footer from './Footer'

// props as children (name should be children)

function Layout({ children }) {
  return (
    <div className='layout'>
        <Header>Header</Header>
        {children}
        <Footer>Footer</Footer>
    </div>
  )
}

export default Layout