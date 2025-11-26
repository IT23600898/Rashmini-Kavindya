import React from 'react'
import Navbar from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

// src/App.jsx
export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen"> 
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}