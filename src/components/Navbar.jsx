import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className = "header">
        <NavLink to = "/" className = "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className = "blue-gradient_text">L.L. </p> 
        </NavLink>
        <nav className = "flex text-lg font-medium gap-7"> 
            <NavLink to = "/about" className = {({isActive}) => isActive ? "text-lime-700" : "text-black"}>
                About 
            </NavLink>  
             <NavLink to = "/projects" className = {({isActive}) => isActive ? "text-lime-700" : "text-black"}>
                Projects
            </NavLink>  
             <NavLink to = "/contact" className = {({isActive}) => isActive ? "text-lime-700" : "text-black"}>
                Contact
            </NavLink>  
        </nav> 
    </header>
  )
}

export default Navbar