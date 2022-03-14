import React from 'react'

import { images } from '../../constants'
import './Header.css'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">KAUSHIK BAIDYA</h1>
      <h3 className="app__header-h3">Frontend Developer</h3>
      <button type="button" className="custom__button">
        Contact
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
)

export default Header
