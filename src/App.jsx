import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact } from './pages'
import './index.css'

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </main>
  )
}

export default App
