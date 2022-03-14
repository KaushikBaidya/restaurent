import React from 'react'

import { AboutUs, FindUs, Footer, Header, Projects } from './container'
import { Navbar } from './components'
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Projects />
    <FindUs />
    <Footer />
  </div>
)

export default App
