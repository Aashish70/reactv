import React from 'react'
import Hero from './Hero'
import About from './About'


function Layout() {
  return (
    <div className='h-[30vh] bg-amber-600 w-full p-1.5'>
        <Hero/>
        <About/>
    </div>
  )
}

export default Layout