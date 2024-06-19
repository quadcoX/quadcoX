import React from 'react'

import { Navbar, Hero, Choose_us, Footer, Our_process, Our_services } from './components'

const App = () => {
  return (
    <>
      <div className='nav-bar-inner page-width'>
        <Navbar />
      </div>

      <div className='hero-section page-width'>
        <Hero />
      </div>

      <div className='our-services page-width'>
        <Our_services />
      </div>

      <div className='our-process page-width'>
        <Our_process />
      </div>

      <div className='choose-us page-width'>
        <Choose_us />
      </div>
    </>
  )
}

export default App
