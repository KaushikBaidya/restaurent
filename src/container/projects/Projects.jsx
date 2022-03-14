import React from 'react'

import { images } from '../../constants'
import './Projects.css'

const Projects = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">My Projects</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app_card">
        <img src={images.avatar} alt="Avatar" style={{ width: '100%' }} />
        <div className="app_container_card">
          <h4>
            <b>E-commerce Shop</b>
          </h4>
          <p>ReactJS, Commerce API, MaterialUI, Stripe, Vercel</p>
        </div>
      </div>
      <div className="app_card">
        <img src={images.avatar} alt="Avatar" style={{ width: '100%' }} />
        <div className="app_container_card">
          <h4>
            <b>RealEstate</b>
          </h4>
          <p>ReactJS, Commerce API, Stripe, ChakraUI, Vercel</p>
        </div>
      </div>
      <div className="app_card">
        <img src={images.avatar} alt="Avatar" style={{ width: '100%' }} />
        <div className="app_container_card">
          <h4>
            <b>E-commerce Shop</b>
          </h4>
          <p>ReactJS, Commerce API, Stripe, Vercel</p>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
