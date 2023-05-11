import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1>Job Founder</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="help">Help</NavLink>
      <NavLink to="careers">Careers</NavLink>
    </nav>
  )
}
