import React from 'react'

import {Navbar, Welcome, Dock} from "#components"
import { Draggable } from "gsap/Draggable";
import Safari from '#windows/Safari.jsx'
import {Terminal} from '#windows'
import { gsap } from "gsap";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
    </div>
  )
}

export default App
