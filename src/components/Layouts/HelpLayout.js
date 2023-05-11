import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">
      
      <h2>Website Help</h2>
      <p>Check the most asked questions below</p>


      <nav className="help-nav">
        <NavLink to="faq">View The FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
