'use client';

import { useState } from 'react';

import Drawer from './components/Drawer';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  return (
    <main 
      className="
        h-screen
        bg-orange-100
        overflow-x-hidden
      "
    >
      <Drawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavBar 
        setIsOpen={setIsOpen}
      />
      <Hero/>
      <About />
      <Skills />
      <Projects /> 
    </main>
  )
}
