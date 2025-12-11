import React from 'react'

import {Navbar, Welcome, Dock} from "#components"
import { Draggable } from "gsap/Draggable";
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
    </div>
  )
}

export default App
