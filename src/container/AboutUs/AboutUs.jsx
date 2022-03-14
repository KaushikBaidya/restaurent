import React from 'react'

import { images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">About Me</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <br />
        <h1>Hello, I am Kaushik Baidya.</h1>
        <br />
        <h3 className="h2">
          I am creative and self-starting Front-End Developer with the
          experience of building stable websites and apps in fast-paced,
          collaborative environments. Skilled in HTML, CSS, JavaScript, ReactJS
          and working knowledge of Figma for UI/UX.
        </h3>
        <br />
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs
