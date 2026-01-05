import React from 'react'

import {Navbar, Welcome, Dock} from "#components"
import { Draggable } from "gsap/Draggable";
import Safari from '#windows/Safari.jsx'
import {Finder, Terminal} from '#windows'
import { gsap } from "gsap";
import Resume from '#windows/Resume.jsx'

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
    </div>
  )
}

export default App
